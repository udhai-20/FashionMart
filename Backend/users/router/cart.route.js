const express = require("express");

const cartRouter = express.Router();

const { cartModel } = require("../model/cart.model");

cartRouter.get("/", async (req, res) => {

  const userID = req.body.userId;
  console.log(userID);
  try {
  
      const getdata = await cartModel.find({userId:userID});
      res.send(getdata);
  
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

cartRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const userID = req.body.userId;
    console.log(userID);
    const user = await cartModel.findOne({ _id: id });
    console.log(user);
    if(userID !== user.userId){
      res.send("user is not authorized");
    }else{
      const getdata = await cartModel.findById({_id:id});
      res.send(getdata);
    }
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})

cartRouter.post("/add_to_cart", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const new_note = new cartModel(payload);
    await new_note.save();
    res.send({ message: "data is created" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

cartRouter.put("/update/:cartId", async (req, res) => {
  try {
    const payload =req.body;
    const cartId = req.params.cartId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await cartModel.findOne({ _id: cartId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await cartModel.findByIdAndUpdate({ _id: cartId }, payload);
      res.send("note is updated");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


cartRouter.delete("/delete/:cartId", async (req, res) => {
  try {
    const cartId = req.params.cartId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await cartModel.findOne({ _id: cartId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await cartModel.findByIdAndDelete({ _id: cartId });
      res.send("note is deleted");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

cartRouter.get("/delete/allcarts", async (req, res) => {
  try {
    // const cartId = req.params.cartId;
    const userID = req.body.userId;
    console.log(cartModel)
      await cartModel.deleteMany({userId:userID});
      res.send("all is deleted");
     
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


module.exports = { cartRouter };
