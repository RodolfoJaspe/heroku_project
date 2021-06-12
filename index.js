require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 9000

app.use(express.json())
app.use(cors())
app.use("/api/", (_,res)=>{
    res.json({data: "api serving data!!"})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

console.log("Hi")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER)
console.log(process.env.PORT) 