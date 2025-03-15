var express = require("express");
const { ObjectId } = require("mongodb");
var router = express.Router();
var Product = require("./../entity/product");
var ProductService = require("./../services/productservice");

router.post("/insert-product", async function(req,res){
    var productService = new ProductService();
    var pro = new Product();
    pro.Name = req.body.Name;
    pro.Price = req.body.Price;
    var result =  await productService.insertProduct(pro);
    res.json({status: true, message:""});
});


router.get("/product-list", async function(req,res){
    //console.log(req);
    var pageIndex = Number(req.query.pageIndex) ;
    var pageSize = Number( req.query.pageSize);
    console.log("pageIndex:" + pageIndex + " " + "pageSize:" + pageSize);
    var productService = new ProductService();
    var product =  await productService.getProductList(pageIndex,pageSize);
    res.json(product);
});

router.get("/", async function(req, res) {
    var productService = new ProductService();
    var productList = await productService.getProductList(1, 10); // Lấy 10 sản phẩm

    res.render("shop.ejs", { products: productList });
});

module.exports = router;