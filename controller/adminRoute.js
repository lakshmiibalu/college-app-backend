const express = require("express")
const adminModel = require("../models/adminModel")

const router = express.Router()
const bcrypt = require("bcryptjs")
hashPasswordgenerator=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/adminlogin",async(req,res)=>{
    let {data} = {"data":req.body}
    let password = data.password
    console.log(password)
    const hashedPassword = await hashPasswordgenerator(password)
    data.password = hashedPassword
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






    