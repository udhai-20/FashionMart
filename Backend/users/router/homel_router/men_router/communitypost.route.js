const express = require("express");

const communityRoutermen = express.Router();

const {
  communitypostModel,
} = require("../../../model/home_model/men_model/communitypost.model");

communityRoutermen.get("/", async (req, res) => {
  try {
    const getdata = await communitypostModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

communityRoutermen.post("/community_data", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await communitypostModel.insertMany(payload);
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { communityRoutermen };
