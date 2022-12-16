const mongoose = require("mongoose");

const newtosaleSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offer:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const newtosaleModel = mongoose.model("newtosale", newtosaleSchema);

module.exports = {newtosaleModel};