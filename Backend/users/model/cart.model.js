const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offers:String,
    price:Number,
    quantity:Number,
    compare: String,
    size:String,
    userId:String
});

const cartModel = mongoose.model("data", cartSchema);

module.exports = {cartModel};