require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 9000
const path = require("path")

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "todo/build")))

app.use("/api/", (_,res)=>{
    res.json({data: {}})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

console.log(__dirname)
console.log(__filename)
console.log(process.env.USER)
console.log(process.env.PORT) 