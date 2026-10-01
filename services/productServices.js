const database = require("../database/productsDatabase")
async function getAllProducts() {
    return await database.getProducts()
}

async function getProductById(id) {
    const products = await database.getProducts()
    return products.find((x) => x.id === id)
}

async function createProduct(product) {
    const products = await database.getProducts()
    const newProduct = {
        id: products.length + 1,

        name: product.name,
        price: product.price
    }
    return await database.createProduct(newProduct)
}
async function updateProduct(id, product) {
    const updatedProduct = {
        id: id,
        name: product.name,
        price: product.price
    }

    return await database.updateProduct(id, updatedProduct)
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct
}