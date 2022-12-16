const mongoose = require("mongoose");

const communitypostSchema = mongoose.Schema({
    communitypost:String,
    userId:String
});

const communitypostModel = mongoose.model("communitypostMen", communitypostSchema);

module.exports = {communitypostModel};