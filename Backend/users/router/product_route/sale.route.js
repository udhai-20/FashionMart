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

// saleRouter.post("/sale_data", async (req, res) => {
//   try {
//     const payload = req.body;
//     console.log(payload);
//     await saleModel.insertMany(payload);
//     res.send({ message: "data is added" });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

module.exports = { saleRouter };
