const express = require("express")
const adminModel = require("../models/adminModel")

const router = express()
const bcrypt = require("bcryptjs")

router.post("/studlogin",async(req,res)=>{

    let input = req.body
    let email = req.body.email

    let data = await adminModel.findOne({"email":email})
    if (!email) {
        return res.json(
            {
                status:"invalid user"
            }
        )
        
    }

    console.log(data)
    let dbPassword = data.password
    let inputPassword = req.body.password

    console.log(dbPassword)
    console.log(inputPassword)

    const match = await bcrypt.compare(inputPassword,dbPassword)

    if (!match) {

        return res.json({
            status:"incorrect password"
        })
        
    }

    res.json(
        {
            status:"success"
        }
    )
    

})



module.exports = router