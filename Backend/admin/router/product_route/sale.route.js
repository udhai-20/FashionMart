const express = require("express");

const saleRouter = express.Router();

const { saleModel } = require("../../model/product_model/sale.model");

saleRouter.get("/", async (req, res) => {
  console.log(req.query);
  const { _page, _limit,_sort, _order } = req.query;

  try {
    if (_sort === "price" && _order === "1") {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await saleModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:1})
      res.send(getdata);

    } else if (_sort === "price" && _order === "-1" ) {

      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await saleModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
        .sort({price:-1})
      res.send(getdata);

    }else if(_page > 0 && _limit >0){
      const skips = Number(_page) * Number(_limit) - Number(_limit);
      const getdata = await saleModel
        .find()
        .skip(`${skips}`)
        .limit(`${Number(_limit)}`)
      res.send(getdata);
    }else {
      const getdata = await saleModel.find();
      res.send(getdata);
    }
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


saleRouter.get("/delete/allsales", async (req, res) => {
  try {
    // const cartId = req.params.cartId;
    const userID = req.body.userId;
 
      await saleModel.deleteMany({userId:userID});
      res.send("all is deleted");
    
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = { saleRouter };
