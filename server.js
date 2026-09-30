const express = require("express")
const app = express()
const fs = require("fs")
const path = require("path")
const filepath = path.join(__dirname, "./db.json")

app.get("/product", (req, res) => {
    const data = JSON.parse(fs.readFileSync(filepath, "utf-8"))
    res.status(200).json(data)

})


app.get("/product/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync(filepath, "utf-8"))
    const id = Number(req.params.id)
    const content = data.find((x) => x.id === id)
    console.log(content)
    res.status(200).json(content)

})


app.listen(3000)