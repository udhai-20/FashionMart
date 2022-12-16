const mongoose = require("mongoose");

const crausel_homeSchema = mongoose.Schema({
    crausel_home:String,
    userId:String
});

const crausel_homeModel = mongoose.model("home_crauselMen", crausel_homeSchema);

module.exports = {crausel_homeModel};