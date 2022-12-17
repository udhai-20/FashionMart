const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
    images: String,
    userId:String
});

const saleModel = mongoose.model("sale", saleSchema);

module.exports = {saleModel};