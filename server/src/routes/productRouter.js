import express from "express"
import productActions from "../controllers/productController.js"
const router = express.Router()

router.get("/",productActions.getAll)
router.get("/:id",productActions.getByID)
router.post("/",productActions.createNew)
router.delete("/:id",productActions.deleteByID)

export default router