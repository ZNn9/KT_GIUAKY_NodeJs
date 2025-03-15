var express = require("express");
var router = express.Router();
router.use("/product", require(__dirname + "/productmanager"));
router.use("/user", require(__dirname + "/usercontroller"));
router.get("/", function (req, res) {
    //res.json({"message": "this is admin page"});
    res.render("admin/index");
});

module.exports = router;