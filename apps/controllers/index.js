var express = require("express");
var router = express.Router();

router.use("/home", require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/shop", require(__dirname + "/shopcontroller"));
router.use("/about", require(__dirname + "/aboutcontroller"));
router.use("/contact", require(__dirname + "/contactcontroller"));
router.use("/vegetables", require(__dirname + "/vegetablescontroller"));
router.use("/admin", require(__dirname + "/admin/admincontroller"));

router.get("/", function (req, res) {
    res.render("index.ejs");
});
module.exports = router;
