const express = require("express")
const marksModel = require("../models/marksModel")

const router = express.Router()

router.post("/addmarks",async(req,res)=>{
    let data = req.body
    let marks = new marksModel(data)
    let result = marks.save()
    res.json(
        {
            status : "success"
        }
    )
}
)

module.exports = router