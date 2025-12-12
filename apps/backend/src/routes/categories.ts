import { Router } from "express"
import db from "../db/index.js"
import { productCategoryTable, productTable } from "../db/schema.js"
import { like } from "drizzle-orm"

const router = Router()

router.get("/", async (_req, res) => {
  const categories = await db.select().from(productCategoryTable)
  return res.json(categories.map((item) => item.name))
})

router.get("/:category", async (req, res) => {
  const { category } = req.params

  const parsedID = Number.parseInt(category);

  if (Number.isNaN(parsedID)) {
    console.log("category id is not a number, handling as if its the name");
    const cat = await db.query.productCategoryTable.findFirst({
      columns: {
        id: false
      },
      where: like(productCategoryTable.name, `%${category}%`),
      with: {
        products: {
          columns: {
            categoryId: false
          }
        }
      }
    })


    if (!cat) {
      res.status(404)
      return res.json({
        status: 404,
        message: "category not found"
      })
    }

    res.json(cat)
  }
})
export default router
