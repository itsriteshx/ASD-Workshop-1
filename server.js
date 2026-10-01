const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
const filepath = path.join(__dirname, "./db.json")


const cache = {}

app.get("/product", async (req, res) => {
    try {
        let key = req.url
        let value = cache[key]
        if (value) {
            return res.status(200).json(JSON.parse(value))
        }
        const data = await fs.promises.readFile(filepath, "utf-8")
        cache[key] = data
        const products = JSON.parse(data)
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }

})


app.get("/product/:id", async (req, res) => {
    try {
        const data = await fs.promises.readFile(filepath, "utf-8")
        const products = JSON.parse(data)
        const id = Number(req.params.id)
        const content = products.find((x) => x.id === id)
        res.status(200).json(content)
    } catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
})


async function readfilewithdelay() {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const data = await fs.promises.readFile(filepath, "utf-8")
                const products = JSON.parse(data)
                resolve(products)
            } catch (error) {
                reject(error)
            }
        }, 1500)
    })
}




app.listen(3000,(req,res)=>{
    console.log("Successfully is Running on Port 3000")
});