import { Router } from "express";
import { StatusCodes as STATUS, ReasonPhrases as REASON } from "http-status-codes"
import db from "../db/index.js";
import { cartItemsTable, cartTable } from "../db/schema.js";
import { eq } from "drizzle-orm";
const router = Router();

router.get("/me", async (req, res) => {
  if (!req.isAuthenticated() || !req.user) {
    res.status(STATUS.UNAUTHORIZED)
    res.json({
      status: STATUS.UNAUTHORIZED,
      message: REASON.UNAUTHORIZED
    })
  }

  const user = req.user;

  const cart = await db.query.cartTable.findFirst({
    where: eq(cartTable.userId, user!.id),
    with: {
      contents: {
        with: {
          product: true
        }
      }
    }
  })

  return res.json({
    ...user,
    cart,
  })

})
