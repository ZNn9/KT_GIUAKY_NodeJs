var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    res.json({"message": "this is index page"});
    // res.render("index.ejs");
 });

module.exports = router;