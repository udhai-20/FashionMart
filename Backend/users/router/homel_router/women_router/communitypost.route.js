const express = require("express");

const communityRouter = express.Router();

const {
  communitypostModel,
} = require("../../../model/home_model/women_model/communitypost.model");

communityRouter.get("/", async (req, res) => {
  try {
    const getdata = await communitypostModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// communityRouter.post("/community_data", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);
//     await communitypostModel.insertMany(payload);
//     res.send({ message: "data is added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { communityRouter };
