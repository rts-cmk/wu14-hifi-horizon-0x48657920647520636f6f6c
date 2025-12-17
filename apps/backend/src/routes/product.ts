import express from "express"
import db from "../db/index.js";
import { productCategoryTable, productTable, productVariantTable } from "../db/schema.js";
import { eq } from "drizzle-orm";


const router = express.Router();

router.get("/", async (_req, res) => {
  const otherProducts = await db.query.productTable.findMany({
    columns: {
      categoryId: false,
      id: false,
    },
    with: {
      category: {
        columns: {
          name: true,
        }
      },
      variants: {
        columns: {
          imageURL: true,
          name: true,
        }
      }
    }
  })
  console.log(otherProducts)
  return res.json(otherProducts)
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

  const item = await db.select({
    name: productTable.name,
    category: productCategoryTable.name,
    price: productTable.price,
    summery: productTable.summery,
    description: productTable.description,
  })
    .from(productTable)
    .where(eq(productTable.id, parsedID))
    .leftJoin(productCategoryTable, eq(productTable.categoryId, productCategoryTable.id))

  if (!item || item[0] == undefined) {
    res.status(404)
    return res.json({
      status: 404,
      message: "invalid id"
    })
  }

  return res.json(item[0])
})

export default router;
