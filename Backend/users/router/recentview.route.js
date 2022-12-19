const express = require("express");

const recentRouter = express.Router();

const { recentViewModel } = require("../model/recentview.model");

recentRouter.get("/", async (req, res) => {
  const userID = req.body.userId;
  console.log(userID);
  try {
    const getdata = await recentViewModel.find({userId:userID});

    res.send(getdata);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

recentRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const userID = req.body.userId;
    console.log(userID);
    const user = await recentViewModel.findOne({ _id: id });
    console.log(user);
    if(userID !== user.userId){
      res.send("user is not authorized");
    }else{
      const getdata = await recentViewModel.findById({_id:id});
      res.send(getdata);
    }
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})

recentRouter.post("/add_to_recent_view", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const new_note = new recentViewModel(payload);
    await new_note.save();
    res.send({ message: "item is created" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

recentRouter.get("/delete/allrecentview", async (req, res) => {
  try {
    // const cartId = req.params.cartId;
    const userID = req.body.userId;
    console.log(cartModel)
      await recentViewModel.deleteMany({userId:userID});
      res.send("all are deleted");
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
module.exports = { recentRouter };
