const mongoose = require("mongoose");

const saleSchema = mongoose.Schema({
    image: String,
    userId:String
});

const saleModel = mongoose.model("sale", saleSchema);

module.exports = {saleModel};