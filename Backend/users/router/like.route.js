const express = require("express");

const likeRouter = express.Router();

const { likeModel } = require("../../users/model/likes.model");

likeRouter.get("/", async (req, res) => {
  try {
    const getdata = await likeModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

likeRouter.post("/add_to_like", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const new_note = new likeModel(payload);
    await new_note.save();
    res.send({ message: "note is created" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { likeRouter };
