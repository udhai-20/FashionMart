const express = require("express");

const saleRouter = express.Router();

const { saleModel } = require("../../model/product_model/sale.model");

saleRouter.get("/", async (req, res) => {
  console.log(req.query);

  try {
    const getdata = await saleModel.find();
    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

saleRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const getdata = await saleModel.findById({_id:id});
    res.send(getdata);
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})


saleRouter.post("/sale_singledata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const postdata = new saleModel(payload);
    await postdata.save();
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

saleRouter.post("/sale_manydata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await saleModel.insertMany(payload);
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

saleRouter.put("/update/:saleId", async (req, res) => {
  try {
    const payload = req.body;
    const saleId = req.params.saleId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await saleModel.findOne({ _id: saleId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await saleModel.findByIdAndUpdate({ _id: saleId }, payload);
      res.send("note is updated");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

saleRouter.delete("/delete/:saleId", async (req, res) => {
  try {
    const saleId = req.params.saleId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await saleModel.findOne({ _id: saleId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await saleModel.findByIdAndDelete({ _id: saleId });
      res.send("note is deleted");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { saleRouter };
