const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsControllers")
const { cacheMiddleware } = require("../middleware/cacheMiddleware")
router.get("/product", cacheMiddleware, productController.getProducts)
router.get("/product/:id", cacheMiddleware, productController.getProductById)
router.post("/product", productController.createProduct)
router.put("/product/:id", productController.updateProduct)
router.patch("/product/:id", productController.patchProduct)
router.delete("/product/:id", productController.deleteProduct)

module.exports = router