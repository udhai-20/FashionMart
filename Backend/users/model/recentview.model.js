const mongoose = require("mongoose");

const recentViewSchema = mongoose.Schema({
    image: String,
    title: String,
    details: String,
    offer:String,
    price:Number,
    quantity:Number,
    compare: String,
    userId:String
});

const recentViewModel = mongoose.model("recentlyviewed", recentViewSchema);

module.exports = {recentViewModel};