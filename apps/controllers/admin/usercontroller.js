var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    //res.json({"message": "this is admin page"});
    res.render("./admin/tables/tables");
});

module.exports = router;