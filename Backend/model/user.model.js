const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: String,
    password: String,
});

const userModel = mongoose.model("useCredentials", userSchema);

module.exports = {userModel};