const jwt = require("jsonwebtoken");


const authenticate = (req, res, next)=>{
    const token = req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded = jwt.verify(token, "shhh");
        if(decoded){
            // console.log(decoded);
            const userID = decoded.userId;
            req.body.userId = userID;    
            next();
        }else{
            res.send("please login")
        }

    }else{
        res.send("please login");
    }
}


module.exports ={authenticate};