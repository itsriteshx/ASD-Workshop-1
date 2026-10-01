const productService = require("../services/productServices")
const cache = require("../middleware/cacheMiddleware")
async function getProducts(req, res){
    try {
        const products = await productService.getAllProducts()
        cache.setCache(req.cacheKey, products)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

async function getProductById(req, res) {
    try {
        const id = Number(req.params.id)
        const product = await productService.getProductById(id)
        if (!product) {
    return res.status(404).json({
        message: "Product not found"
    })
}
        cache.setCache(req.cacheKey, product)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

async function createProduct(req, res) {
    try {
        const product = await productService.createProduct(req.body)
        cache.clearCache()
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}
async function updateProduct(req, res) {
    try {
        const id = Number(req.params.id)
        const product = await productService.updateProduct(
            id,
            req.body
        )

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        cache.clearCache()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

async function patchProduct(req, res) {
    try {
        const id = Number(req.params.id)
        const product = await productService.patchProduct(
            id,
            req.body
        )

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        cache.clearCache()
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

async function deleteProduct(req, res) {
    try {
        const id = Number(req.params.id)
        const deleted = await productService.deleteProduct(id)

        if (!deleted) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        cache.clearCache()
        res.status(200).json({
            message: "Product deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}