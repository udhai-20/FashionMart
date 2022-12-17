const express = require("express");
const adminRouter = express.Router();
const bcrypt = require("bcrypt");
const { adminModel } = require("../model/admin.model");
//import json web token
const jwt = require("jsonwebtoken");

adminRouter.get("/", (req, res) => {
  res.send("<h1>WelCome</h1>");
});

adminRouter.get("/admins", async(req, res) => {
  try{

    const getusers = await adminModel.find();
          res.send(getusers);

  }catch(er){
    res.status(400).send({ message: err.message });

  }
 
});


adminRouter.post("/admin/signup", async (req, res) => {
  const { email, password } = req.body;
  const ip = req.ip;
  const time =new Date();
  try {
    const userPresent = await adminModel.findOne({ email });
    if (userPresent) {
      res.send("Already registered");
    } else {
      bcrypt.hash(password, 5, async function (err, hash) {
        const userDetails = new adminModel({ email, password: hash ,ip:ip, time:time});
        await userDetails.save();
        console.log("data is added");
        res.send("signup successful");
      });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
    console.log("data adding failed");
  }
});

adminRouter.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await adminModel.find({ email });
    const hashed_password = user[0].password;

    if (user.length > 0) {
      bcrypt.compare(password, hashed_password, function (err, result) {
        // result == true
        if (result) {
          const token = jwt.sign({ userId: user[0]._id }, "shhh", {
            expiresIn: "24h",
          });
          res.send({ message: "login successful ", token: `${token}` });
        } else {
          res.send("login failed");
        }
      });
    } else {
      res.send("login failed");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
    console.log("data adding failed");
  }
});

module.exports = { adminRouter };
