import { Router } from "express"
import { contactSchema, contactTable } from "../db/schema.js"
import z from "zod"
import db from "../db/index.js"

const router = Router()

router.post("/", async(req, res) => {
    const data = contactSchema.safeParse(req.body)
    if(!data.success){
        res.status(400)
        return res.json({
            status: 400,
            message: "malformed contact data",
            errors: z.treeifyError(data.error)
        })
    }
    await db.insert(contactTable).values(data.data)
    return res.send()
})