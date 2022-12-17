const express = require("express");

const kidsRouter = express.Router();

const { kidsModel } = require("../../model/product_model/kids.model");

kidsRouter.get("/", async (req, res) => {
  console.log(req.query);

  try {
    const getdata = await kidsModel.find();
    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

kidsRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const getdata = await kidsModel.findById({_id:id});
    res.send(getdata);
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})


kidsRouter.post("/kids_singledata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const postdata = new kidsModel(payload);
    await postdata.save();
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

kidsRouter.post("/kids_manydata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await kidsModel.insertMany(payload);
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

kidsRouter.put("/update/:kidsId", async (req, res) => {
  try {
    const payload = req.body;
    const kidsId = req.params.kidsId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await kidsModel.findOne({ _id: kidsId });
    console.log(user);
    // if (userID !== user.userId) {
      // res.send("user is not authorized");
    // } else {
      await kidsModel.findByIdAndUpdate({ _id: kidsId }, payload);
      res.send("note is updated");
    // }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

kidsRouter.delete("/delete/:kidsId", async (req, res) => {
  try {
    const kidsId = req.params.kidsId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await kidsModel.findOne({ _id: kidsId });
    console.log(user);
    // if (userID !== user.userId) {
      // res.send("user is not authorized");
    // } else {
      await kidsModel.findByIdAndDelete({ _id: kidsId });
      res.send("note is deleted");
    // }

  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { kidsRouter };
