const express = require('express');
const cors = require("cors");
require("dotenv").config();

const {connection} = require("./config/db");
const {userRouter} = require("./router/user.route");
const {cartRouter}  = require("./router/cart.route")
const {authenticate} = require("./middleware/authentication")
const app = express();

app.use(express.json());

app.use("/", userRouter);

app.use(authenticate);

app.use("/cart", cartRouter);

app.listen(process.env.PORT, async ()=>{
    try{
        await connection;
        console.log("connection successful!")
    }catch(err){
        console.log("connection failed")
    }

    console.log(`server listen on port ${process.env.PORT}`)
})