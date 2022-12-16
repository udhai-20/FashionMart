const express = require("express");

const tradingRouter = express.Router();

const  { tradingModel} = require("../../../model/home_model/women_model/tradingnow.model");

tradingRouter.get("/", async (req, res) => {
  try {
    const getdata = await tradingModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// tradingRouter.post("/trading_data", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);

//     await tradingModel.insertMany(payload);

//     res.send({ message: "data is added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { tradingRouter };