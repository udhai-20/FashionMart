const express = require("express");

const orderRouter = express.Router();

const { orderModel } = require("../model/ordered.model");

orderRouter.get("/", async (req, res) => {
  const userID = req.body.userId;
  console.log(userID);
  try {
    const getdata = await orderModel.find({userId:userID});

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});


orderRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const userID = req.body.userId;
    console.log(userID);
    const user = await orderModel.findOne({ _id: id });
    console.log(user);
    if(userID !== user.userId){
      res.send("user is not authorized");
    }else{
      const getdata = await orderModel.findById({_id:id});
      res.send(getdata);
    }
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})

orderRouter.post("/add_order", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const new_note = new orderModel(payload);
    await new_note.save();
    res.send({ message: "note is created" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

orderRouter.put("/update/:orderId", async (req, res) => {
  try {
    const payload = req.body;
    const orderId = req.params.orderId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await orderModel.findOne({ _id: orderId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await orderModel.findByIdAndUpdate({ _id: orderId }, payload);
      res.send("note is updated");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


orderRouter.delete("/delete/:orderId", async (req, res) => {
  try {
   
    const orderId = req.params.orderId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await orderModel.findOne({ _id: orderId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await orderModel.findByIdAndDelete({ _id: orderId });
      res.send("item is deleted");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

orderRouter.get("/delete/allorders", async (req, res) => {
  try {
    // const cartId = req.params.cartId;
    const userID = req.body.userId;
 
      await orderModel.deleteMany({userId:userID});
      res.send("all is deleted");
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { orderRouter };
