import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local";
import db from "../db/index.js"
import { userRegisterSchema, userTable, type UserTable, shippingDetailsSchema } from "../db/schema.js";
import { eq } from "drizzle-orm";
import argon2 from "argon2";
import { Router } from "express"
import z from "zod";
import * as env from "../env.js"
const router = Router();

declare global {
  namespace Express {
    interface User extends UserTable { }
  }
}

const SECRET_KEY_BASE = env.SECRET_KEY_BASE as string;
if (!SECRET_KEY_BASE) {
  throw new Error("AUTH: Missing secret key base")
}

const argonOptions: argon2.Options = {
  secret: Buffer.from(SECRET_KEY_BASE),
}

const fullSchema = userRegisterSchema.extend({
  shipping: shippingDetailsSchema
})

passport.use(new LocalStrategy(async (username, password, cb) => {
  const [user] = await db.select().from(userTable).where(eq(userTable.email, username)).limit(1);

  if (!user) {
    console.log("user not found!")
    return cb(null, false, { message: "Incorrect email or password" });
  }

  if (!argon2.verify(user.password, password, argonOptions)) {
    console.log("password doesnt match")
    return cb(null, false, { message: "Incorrect email or password" });
  }
  console.log("user matched")
  return cb(null, user)

}));

passport.serializeUser((user, cb) => {
  console.log("serializing user:", user)
  process.nextTick(() => {
    return cb(null, {
      data: {
        hello: "world",
        ...user
      },
      id: user.id,
      username: user.name,
    })
  })
})

passport.deserializeUser((user, cb) => {
  console.log("deserializing user:", user)
  process.nextTick(() => {
    if (!user) {
      return cb(new Error("User not found"))
    }
    if (typeof user === "object" && "id" in user && "username" in user) {
      return cb(null, user as Express.User)
    }

    return cb(new Error("User not found"))
  })
})

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err: Error, user: Express.User, info: { message: string }) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ status: 401, message: info.message || "Login failed" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.json({
        status: 200,
        message: "Login successful",
        user: {
          data: {
            hello: "world",
            ...user
          },
          id: user.id,
          username: user.name
        }
      });
    });
  })(req, res, next);
});

router.post("/register", async (req, res, next) => {
  const data = fullSchema.safeParse(req.body);

  if (!data.success) {
    res.status(422);
    return res.json({
      status: 422,
      message: "Invalid post body",
      errors: z.treeifyError(data.error)
    });
  }

  try {
    const user = await db.query.userTable.findFirst({
      where: eq(userTable.name, data.data.name)
    })

    if (user) {
      return res.status(409).json({
        status: 409,
        message: "username already taken"
      })
    }

    const pwdHash = await argon2.hash(data.data.password, argonOptions);
    const newUser = await db.insert(userTable).values({
      ...data.data,
      password: pwdHash
    }).returning();

    if (!newUser || !newUser[0] || newUser[0] == undefined) {
      throw new Error("failed to create new user")
    }

    req.login(newUser[0], (err) => {
      if (err) return next(err);
      return res.status(201).json({
        status: 201,
        message: "Registration successful",
        user: {
          id: newUser[0]!.id,
          username: newUser[0]!.name
        }
      });
    })
  } catch (e) {
    next(e);
  }
})

router.get("/me", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ status: 401, message: "Unauthorized" });
  }
  const dbUser = await db.select({
    id: userTable.id,
    username: userTable.name,
    email: userTable.email,
  }).from(userTable).where(eq(userTable.id, req.user!.id))
  return res.json(dbUser);
})

export default router;

