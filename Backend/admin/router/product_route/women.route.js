const express = require("express");

const womenRouter = express.Router();

const { womenModel } = require("../../../admin/model/product_model/women.model");

womenRouter.get("/", async (req, res) => {
  console.log(req.query);

  try {
    const getdata = await womenModel.find();
    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

womenRouter.post("/women_singledata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const postdata = new womenModel(payload);
    await postdata.save();
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

womenRouter.post("/women_manydata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await womenModel.insertMany(payload);
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

womenRouter.put("/update/:womenId", async (req, res) => {
  try {
    const payload = req.body;
    const womenId = req.params.womenId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await womenModel.findOne({ _id: womenId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await womenModel.findByIdAndUpdate({ _id: womenId }, payload);
      res.send("note is updated");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

womenRouter.delete("/delete/:womenId", async (req, res) => {
  try {
    const womenId = req.params.womenId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await womenModel.findOne({ _id: womenId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await womenModel.findByIdAndDelete({ _id: womenId });
      res.send("note is deleted");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { womenRouter };