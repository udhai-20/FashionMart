const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offers:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const likeModel = mongoose.model("liked", likeSchema);

module.exports = {likeModel};