const mongoose = require("mongoose");

const womenSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offers:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const womenModel = mongoose.model("women", womenSchema);

module.exports = {womenModel};