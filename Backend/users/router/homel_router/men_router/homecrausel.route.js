const express = require("express");

const home_crauselRoutermen = express.Router();

const  { crausel_homeModel} = require("../../../model/home_model/men_model/homecrausel.model");

home_crauselRoutermen.get("/", async (req, res) => {
  try {
    const getdata = await crausel_homeModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

home_crauselRoutermen.post("/homecrausel_data", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await crausel_homeModel.insertMany(payload);
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { home_crauselRoutermen };