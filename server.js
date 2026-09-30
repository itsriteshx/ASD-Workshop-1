const express=require("express")
const app=express()
const fs=require("fs")
const path=require("path")
const filepath=path.join(__dirname,"./db.json")

app.get("/product",(req,res)=>{
    const data=fs.readFileSync(filepath,"utf-8")
    // console.log(data)
    res.status(200).json(JSON.stringify(data))

})
// app.get("/product:id",(req,res)=>{
//     const data=fs.readFileSync(filepath,"utf-8")
//     const id=req.params.id
//     // console.log(id)
//     const content=data.find((x)=>x.id===id)
//     console.log(data)
//     res.status(200).send(JSON.stringify(content))

// })
app.listen(3000);