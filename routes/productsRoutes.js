const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsControllers")
const { cacheMiddleware } = require("../middleware/cacheMiddleware")
router.get("/product", cacheMiddleware, productController.getProducts)
router.get("/products", cacheMiddleware, productController.getProducts)

router.get("/product/:id", cacheMiddleware, productController.getProductById)
router.get("/products/:id", cacheMiddleware, productController.getProductById)

router.post("/product", productController.createProduct)
router.post("/products", productController.createProduct)
router.put("/product/:id", productController.updateProduct)
router.put("/products/:id", productController.updateProduct)

module.exports = router