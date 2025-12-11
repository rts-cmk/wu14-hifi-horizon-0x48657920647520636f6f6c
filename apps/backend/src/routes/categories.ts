import express from "express"
import db from "../db/index.js"
import { productCategoryTable } from "../db/schema.js"

const router = express.Router()

router.get("/", async (_req, res) => {
    const categories = await db.select().from(productCategoryTable)
    return res.json(categories.map((item)=>item.name))
})

export default router