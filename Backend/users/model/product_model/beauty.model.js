const mongoose = require("mongoose");

const beautySchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offers:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const beautyModel = mongoose.model("beauty", beautySchema);

module.exports = {beautyModel};