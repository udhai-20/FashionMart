const mongoose = require("mongoose");

const kidsSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offers:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const kidsModel = mongoose.model("kids", kidsSchema);

module.exports = {kidsModel};