const database = require("../database/productsDatabase")
async function getAllProducts() {
    return await database.getProducts()
}

async function getProductById(id) {
    const products = await database.getProducts()
    return products.find((x) => x.id === id)
}
module.exports = {getAllProducts,getProductById}