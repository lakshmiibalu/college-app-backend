const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const adminRoute = require("./controller/adminRoute")

//middleware
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/collegeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

//routing
app.use("/api/admin",adminRoute)

app.listen(3005,()=>
console.log("Server Running")
)