const express = require("express");

const womenRouter = express.Router();

const { womenModel } = require("../../model/product_model/women.model");

womenRouter.get("/", async (req, res) => {
  console.log(req.query);
  const { _page, _limit,_sort, _order } = req.query;


  try {
    if (_sort === "price" && _order === "1") {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await womenModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:1})
      res.send(getdata);

    } else if (_sort === "price" && _order === "-1") {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await womenModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:-1})
      res.send(getdata);

    }else if(_page > 0 && _limit > 0){
      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await womenModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
      res.send(getdata);

    }else {
      const getdata = await womenModel.find();
      res.send(getdata);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});



womenRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const getdata = await womenModel.findById({_id:id});
    res.send(getdata);
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})

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

womenRouter.get("/delete/allwomen", async (req, res) => {
  try {
    // const cartId = req.params.cartId;
    const userID = req.body.userId;
 
      await womenModel.deleteMany({userId:userID});
      res.send("all is deleted");
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { womenRouter };
