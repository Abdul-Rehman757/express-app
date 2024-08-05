var routes = require("express").Router();

routes.get("/get-home",(req,res)=>{
    return res.send("welcome to home page");

});

module.exports = routes;
