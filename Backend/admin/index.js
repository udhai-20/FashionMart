const express = require('express');
const cors = require("cors");
require("dotenv").config();

const {connection} = require("./config/db");
const {adminRouter} = require("./router/admin.route");
const {beautyRouter}  = require("./router/product_route/beauty.route")
const {kidsRouter} = require("./router/product_route/kids.route")
const {womenRouter} = require("./router/product_route/women.route")
const {menRouter} = require("./router/product_route/men.route")
const {saleRouter} = require("./router/product_route/sale.route")

const {authenticate} = require("./middleware/authentication")
const app = express();

app.use(cors())

app.use(express.json());

app.use("/", adminRouter);

app.use(authenticate);

app.use("/beauty", beautyRouter)
app.use("/kids", kidsRouter)
app.use("/men", menRouter)
app.use("/women", womenRouter)
app.use("/sale", saleRouter)


app.listen(process.env.PORT, async ()=>{
    try{
        await connection;
        console.log("connection successful!")
    }catch(err){
        console.log("connection failed")
    }

    console.log(`server listen on port ${process.env.PORT}`)
})