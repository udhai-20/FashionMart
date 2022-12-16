const mongoose = require("mongoose");

const communitypostSchema = mongoose.Schema({
    communitypost:String,
    userId:String
});

const communitypostModel = mongoose.model("communitypost", communitypostSchema);

module.exports = {communitypostModel};