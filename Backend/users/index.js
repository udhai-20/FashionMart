const express = require('express');
const cors = require("cors");
require("dotenv").config();

const {connection} = require("./config/db");
const {userRouter} = require("./router/user.route");
const {cartRouter}  = require("./router/cart.route")
const {orderRouter} = require("./router/ordered.route")
const {likeRouter}  = require("./router/like.route")
const {recentRouter} = require("./router/recentview.route");
const {beautyRouter}  = require("./router/product_route/beauty.route")
const {kidsRouter} = require("./router/product_route/kids.route")
const {womenRouter} = require("./router/product_route/women.route")
const {menRouter} = require("./router/product_route/men.route")
const {saleRouter} = require("./router/product_route/sale.route")
const {
    communityRouter,
  } = require("./router/homel_router/women_router/communitypost.route");
  
  const {
    home_crauselRouter,
  } = require("./router/homel_router/women_router/homecrausel.route");
  
  const {
    newtosaleRouter,
  } = require("./router/homel_router/women_router/newtosale.route");
  
  const {
    tradingRouter,
  } = require("./router/homel_router/women_router/tradingnow.route");
  
  //for men
  const {
      communityRoutermen,
    } = require("./router/homel_router/men_router/communitypost.route");
    
    const {
      home_crauselRoutermen,
    } = require("./router/homel_router/men_router/homecrausel.route");
    
    const {
      newtosaleRoutermen,
    } = require("./router/homel_router/men_router/newtosale.route");
    
    const {
      tradingRoutermen,
    } = require("./router/homel_router/men_router/tradingnow.route");
    
const {authenticate} = require("./middleware/authentication")
const app = express();
app.use(cors())

app.use(express.json());

app.use("/", userRouter);
app.use("/sale", saleRouter)
app.use("/women", womenRouter)
app.use("/men", menRouter)
app.use("/kids", kidsRouter)
app.use("/beauty", beautyRouter)

app.use("/community", communityRouter);
app.use("/home", home_crauselRouter);
app.use("/newsale", newtosaleRouter);
app.use("/trading", tradingRouter);

//for men

app.use("/communitymen", communityRoutermen);
app.use("/homemen", home_crauselRoutermen);
app.use("/newsalemen", newtosaleRoutermen);
app.use("/tradingmen", tradingRoutermen);

app.use(authenticate);

app.use("/like", likeRouter);
app.use("/recentview", recentRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);


app.listen(process.env.PORT, async ()=>{
    try{
        await connection;
        console.log("connection successful!")
    }catch(err){
        console.log("connection failed")
    }

    console.log(`server listen on port ${process.env.PORT}`)
})