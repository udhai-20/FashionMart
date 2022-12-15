const express = require("express");

const cartRouter = express.Router();

const { cartModel } = require("../model/cart.model");

cartRouter.get("/", async (req, res) => {
  try {
    const getdata = await cartModel.find();

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});


cartRouter.post("/add_to_cart", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const new_note = new cartModel(payload);
    await new_note.save();
    res.send({ message: "note is created" });
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


// cartRouter.delete("/delete/:cartId", async (req, res) => {
//   try {
//     const cartId = req.params.cartId;

//     const cartID = req.body.cartId;
//     console.log(cartID);
//     const user = await cartModel.findOne({ _id: cartId });
//     console.log(user);
//     if (cartID !== user.cartId) {
//       res.send("user is not authorized");
//     } else {
//       await cartModel.findByIdAndDelete({ _id: cartId });
//       res.send("note is deleted");
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { cartRouter };
