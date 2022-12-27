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

// womenRouter.post("/women_data", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);
//     await womenModel.insertMany(payload);
//     res.send({ message: "data is added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { womenRouter };
