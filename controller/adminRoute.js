const express = require("express")
const adminModel = require("../models/adminModel")

const router = express.Router()

router.post("/adminlogin",async(req,res)=>{
    let data = req.body
    let admin = new adminModel(data)
    let result = await admin.save()
    res.send({
        status:"success"
    })
})

router.get("/viewstud",async(req,res)=>{
    let data = await adminModel.find()
    res.json(data)
})


module.exports = router