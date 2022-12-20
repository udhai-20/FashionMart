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





module.exports = { beautyRouter };
