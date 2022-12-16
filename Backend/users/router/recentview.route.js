const express = require("express");

const recentRouter = express.Router();

const { recentViewModel } = require("../model/recentview.model");

recentRouter.get("/", async (req, res) => {
  try {
    const getdata = await recentViewModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

recentRouter.post("/add_to_recent_view", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const new_note = new recentViewModel(payload);
    await new_note.save();
    res.send({ message: "note is created" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { recentRouter };
