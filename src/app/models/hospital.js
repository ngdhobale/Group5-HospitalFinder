const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address: {
        type: String,
    },
    city:{
        type:String,
        required:true
    },
    speciality: {
        type: Array,

    },
    doctor: {
        type: Array,

    },
    image: {
        type: String
    },


});

var Post = mongoose.model("post", postSchema);

module.exports = Post;