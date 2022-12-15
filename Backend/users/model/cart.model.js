const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offer:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const cartModel = mongoose.model("data", cartSchema);

module.exports = {cartModel};