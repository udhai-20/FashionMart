const express = require("express");

const home_crauselRouter = express.Router();

const  { crausel_homeModel} = require("../../../model/home_model/women_model/homecrausel.model")

home_crauselRouter.get("/", async (req, res) => {
  try {
    const getdata = await crausel_homeModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// home_crauselRouter.post("/homecrausel_data", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);
//     await crausel_homeModel.insertMany(payload);
//     res.send({ message: "data is added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { home_crauselRouter };