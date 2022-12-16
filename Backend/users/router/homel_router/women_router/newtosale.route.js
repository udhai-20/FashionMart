const express = require("express");

const newtosaleRouter = express.Router();

const  { newtosaleModel} = require("../../../model/home_model/women_model/newtosale.model");

newtosaleRouter.get("/", async (req, res) => {
  try {
    const getdata = await newtosaleModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// newtosaleRouter.post("/newtosale_data", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);

//     await newtosaleModel.insertMany(payload);

//     res.send({ message: "data is added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { newtosaleRouter };