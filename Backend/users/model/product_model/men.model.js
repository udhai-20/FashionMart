const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offer:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const menModel = mongoose.model("men", menSchema);

module.exports = {menModel};