const mongoose = require("mongoose")

const adminSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rollno:{
            type:String,
            required:true
        },
        admno:{
            type:String,
            required:true
        },
        clgname:{
            type:String,
            required:true
        },
        parent:{
            type:String,
            required:true
        },
        mobno:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports = mongoose.model("admin",adminSchema)