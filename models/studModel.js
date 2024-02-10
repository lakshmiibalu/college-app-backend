const mongoose = require("mongoose")

const studentSchema = mongoose.Schema(
    {
        
        email:String,
        password:String

    }
)

module.exports = mongoose.model("student",studentSchema)