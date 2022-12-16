const mongoose = require("mongoose");

const tradingSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offers:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const tradingModel = mongoose.model("tradingMen", tradingSchema);

module.exports = {tradingModel};