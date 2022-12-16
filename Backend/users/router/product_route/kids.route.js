const express = require("express");

const kidsRouter = express.Router();

const { kidsModel } = require("../../model/product_model/kids.model");

kidsRouter.get("/", async (req, res) => {
  console.log(req.query);
  const { _page, _limit,_sort, _order } = req.query;

  try {
    if (_sort === "price" && _order === "1") {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await kidsModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:1})
      res.send(getdata);

    } else if (_sort === "price" && _order === "-1" || _page > 0 && _limit > 0) {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await kidsModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:-1})
      res.send(getdata);
    } else {
      const getdata = await kidsModel.find();
      res.send(getdata);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// kidsRouter.post("/kids_data", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);
//     await kidsModel.insertMany(payload);
//     res.send({ message: "data is added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { kidsRouter };