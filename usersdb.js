const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    userId:{
        type: Number,
        required: false

    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    book_issued:{
        type: Number,
        required:true
      },
    profilePic:{
        type: String,
        required: true
    }
}) ;
module.exports = mongoose.model("users",UserSchema);