const fs = require("fs")
const path = require("path")
const filepath = path.join(__dirname,"../db.json")
async function getProducts() {
    const data = await fs.promises.readFile(filepath, "utf-8")
    return JSON.parse(data)
}

async function createProduct(product) {
    const products = await getProducts()
    products.push(product)
    await fs.promises.writeFile(
        filepath,
        JSON.stringify(products, null, 2)
    )
    return product
}

async function updateProduct(id, updatedProduct) {
    const products = await getProducts()
    const index = products.findIndex(x => x.id === id)

    if (index === -1) {
        return null
    }

    products[index] = updatedProduct

    await fs.promises.writeFile(
        filepath,
        JSON.stringify(products, null, 2)
    )

    return updatedProduct
}

module.exports = {
    getProducts,
    createProduct,
    updateProduct
}