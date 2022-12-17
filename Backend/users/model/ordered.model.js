const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offers:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const orderModel = mongoose.model("ordered", orderSchema);

module.exports = {orderModel};