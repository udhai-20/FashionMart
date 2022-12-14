const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    Offer:String,
    price:Number,
    quantity:Number,
    compare: String,
    cartId:String
});

const cartModel = mongoose.model("data", cartSchema);

module.exports = {cartModel};