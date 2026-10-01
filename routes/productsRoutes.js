const express = require("express")
const router = express.Router()
const productController = require("../controllers/productsControllers")
const { cacheMiddleware } = require("../middleware/cacheMiddleware")
router.get("/product",
    cacheMiddleware,
    productController.getProducts

)
router.get("/product/:id",
    cacheMiddleware,
    productController.getProductById
)
module.exports = router