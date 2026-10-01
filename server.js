const express = require("express")
const app = express()
const productRoutes = require("./routes/productsRoutes")
app.use(express.json())

app.use((req, res, next) => {
    req.url = req.url.replace(/[\r\n]|%0A|%0D/gi, "").trim()
    req.originalUrl = req.originalUrl.replace(/[\r\n]|%0A|%0D/gi, "").trim()
    next()
})

app.use(productRoutes)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})