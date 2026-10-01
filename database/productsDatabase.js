const fs = require("fs")
const path = require("path")
const filepath = path.join(__dirname,"../db.json")
async function getProducts() {
    const data = await fs.promises.readFile(filepath, "utf-8")
    return JSON.parse(data)
}

module.exports = {getProducts}