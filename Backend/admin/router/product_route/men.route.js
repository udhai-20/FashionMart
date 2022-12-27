const express = require("express");

const menRouter = express.Router();

const { menModel } = require("../../model/product_model/men.model");

menRouter.get("/", async (req, res) => {
  console.log(req.query);
  const { _page, _limit,_sort, _order } = req.query;

  try {
    if (_sort === "price" && _order === "1") {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await menModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:1})
      res.send(getdata);

    } else if (_sort === "price" && _order === "-1" ) {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await menModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:-1})
      res.send(getdata);

    }else if(_page > 0 && _limit > 0){
      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await menModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
      
      res.send(getdata);

    } 
    else {
      const getdata = await menModel.find();
      res.send(getdata);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

menRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const getdata = await menModel.findById({_id:id});
    res.send(getdata);
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})

menRouter.post("/men_singledata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const postdata = new menModel(payload);
    await postdata.save();
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

menRouter.post("/men_manydata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await menModel.insertMany(payload);
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

menRouter.put("/update/:menId", async (req, res) => {
  try {
    const payload = req.body;
    const menId = req.params.menId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await menModel.findOne({ _id: menId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await menModel.findByIdAndUpdate({ _id: menId }, payload);
      res.send("note is updated");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

menRouter.delete("/delete/:menId", async (req, res) => {
  try {
    const menId = req.params.menId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await menModel.findOne({ _id: menId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await menModel.findByIdAndDelete({ _id: menId });
      res.send("note is deleted");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

menRouter.get("/delete/allmen", async (req, res) => {
  try {
    // const cartId = req.params.cartId;
    const userID = req.body.userId;
 
      await menModel.deleteMany({userId:userID});
      res.send("all is deleted");
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { menRouter };
