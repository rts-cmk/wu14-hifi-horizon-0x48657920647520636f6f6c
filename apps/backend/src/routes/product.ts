import express from "express"
import db from "../db/index.js";
import { productTable } from "../db/schema.js";
import { eq } from "drizzle-orm";


const router = express.Router();

router.get("/", async (_req, res) => {
  const items = await db.select().from(productTable);

  return res.json(items)
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  const parsedID = Number.parseInt(id);

  if (Number.isNaN(parsedID)) {
    res.status(404)
    return res.json({
      status: 404,
      message: "invalid id"
    })
  }

  const item = await db.query.productTable.findFirst({
    where: eq(productTable.id, parsedID)
  })

  if (!item) {
    res.status(404)
    return res.json({
      status: 404,
      message: "invalid id"
    })
  }

  return res.json(item)
})

export default router;
