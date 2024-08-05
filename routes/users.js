// import the express package and then use the router method and then save it into the routes
var routes = require("express").Router();
// this is a post method but we can't post anything bcz we 
// do not make anything in which the data can post.....so
// for just understanding or showing the data on browser
// we use the get method

// replacing post with get
routes.get("/create",(req,res)=>{
  return res.send("create user API");
});

// for update method
// just replace the update with get for browsing
routes.get("/update",(req,res)=>{
  return res.send("update the user API");
});

// for put method
// replacing put with get
routes.get("/upsert",(req,res)=>{
  return res.send("upserting the user API");
});

// for patch method
// replacing patch with get
routes.get("/patch",(req,res)=>{
  return res.send("slightly change in the API");
});

// for delete method
// replacing delete with get
routes.get("/delete",(req,res)=>{
  return res.send("removing the record");
});


module.exports = routes;
