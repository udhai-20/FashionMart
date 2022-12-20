const express = require("express");

const beautyRouter = express.Router();

const { beautyModel } = require("../../model/product_model/beauty.model");

beautyRouter.get("/", async (req, res) => {
  console.log(req.query);
  const { _page, _limit,_sort, _order } = req.query;

  try {
    if (_sort === "price" && _order === "1") {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await beautyModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:1})
      res.send(getdata);

    } else if (_sort === "price" && _order === "-1" ) {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await beautyModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:-1})
      res.send(getdata);
    }else if(_page >0 && _limit > 0 ){
      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await beautyModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`);
      res.send(getdata);
    } 
    else {
      const getdata = await beautyModel.find();
      res.send(getdata);
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});


beautyRouter.get("/:id", async(req, res)=>{
  try{
    const id = req.params.id;
    const getdata = await beautyModel.findById({_id:id});
    res.send(getdata);
    
  }catch(err){
    res.status(500).send({ message: err.message });

  }
})


beautyRouter.post("/beauty_singledata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    const postdata = new beautyModel(payload);
    await postdata.save();
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

beautyRouter.post("/beauty_manydata", async (req, res) => {
  try {
    const payload = req.body;
    console.log(payload);
    await beautyModel.insertMany(payload);
    res.send({ message: "data is added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

beautyRouter.put("/update/:beautyId", async (req, res) => {
  try {
    const payload = req.body;
    const beautyId = req.params.beautyId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await beautyModel.findOne({ _id: beautyId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await beautyModel.findByIdAndUpdate({ _id: beautyId }, payload);
      res.send("note is updated");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

beautyRouter.delete("/delete/:beautyId", async (req, res) => {
  try {
    const beautyId = req.params.beautyId;

    const userID = req.body.userId;
    console.log(userID);
    const user = await beautyModel.findOne({ _id: beautyId });
    console.log(user);
    if (userID !== user.userId) {
      res.send("user is not authorized");
    } else {
      await beautyModel.findByIdAndDelete({ _id: beautyId });
      res.send("note is deleted");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

beautyRouter.get("/delete/allbeauty", async (req, res) => {
  try {
    // const cartId = req.params.cartId;
    const userID = req.body.userId;
 
      await beautyModel.deleteMany({userId:userID});
      res.send("all is deleted");
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


module.exports = { beautyRouter };
