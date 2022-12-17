const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    email: String,
    password: String,
    ip: String,
    time: String,
});

const adminModel = mongoose.model("adminAuth", adminSchema);

module.exports = {adminModel};