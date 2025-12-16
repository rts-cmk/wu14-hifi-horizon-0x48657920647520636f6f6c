import express, { json, urlencoded } from "express"
import cors from "cors"
import authRouter from "./routes/auth.js"
import productRouter from "./routes/product.js"
import categoryRouter from "./routes/categories.js"
import contactRouter from "./routes/contact.js"
import session from "express-session"
import passport from "passport"
import morgan from "morgan"
import * as env from "./env.js"
const app = express();

const PORT = process.env.LISTEN_PORT || 3000
const devMode = process.env.NODE_ENV != "production";

app.use(json())
app.use(urlencoded())
app.use(morgan("dev"))
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  credentials: true
}))
app.use(session({
  secret: env.SECRET_KEY_BASE as string,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: !devMode, // Set to true in production (requires HTTPS)
    maxAge: 60 * 60 * 24 * 1000,
    httpOnly: true,
  }
}))
app.use(passport.initialize())
app.use(passport.session())

// Register routers
app.use("/auth", authRouter)
app.use("/products", productRouter)
app.use("/categories", categoryRouter)
app.use("/contact", contactRouter)

app.get("/", (_req, res) => {
  res.status(200)
  res.json({
    status: 200,
    message: "OK"
  });
})


app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Backend service listening on 127.0.0.1:${PORT}`)
});
