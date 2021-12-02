const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: false

    },
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    user:{
        type: Number,
        required: true
    },
    coverPage:{
        type: String,
        required: true
    },

}) ;
module.exports = mongoose.model("books",UserSchema);