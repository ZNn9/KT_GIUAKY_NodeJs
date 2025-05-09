const { ObjectId } = require('mongodb');
var config = require("./../../config/setting.json");
class ProductService{
    databaseConnection = require('./../database/database');
    product = require('./../entity/product');

    client;
    productDatabase;
    productCollection;
    constructor(){
        this.client = this.databaseConnection.getMongoClient();
        this.productDatabase =  this.client.db(config.mongodb.database);
        this.productCollection = this.productDatabase.collection("product");
    }
    async deleteProduct(id){
        return await this.productCollection.deleteOne({"_id": new ObjectId(id) });
    }
    async updateProduct(product){
        return await this.productCollection.updateOne({"_id": new ObjectId(product._id) }, {$set: product});
    }
    async insertProduct(product){
        return await this.productCollection.insertOne(product);
    }
    async getProduct(id){
        return await this.productCollection.findOne({"_id": new ObjectId(id) },{});
    }
    async getProductList(pageIndex, pageSize) {
        const cursor = await this.productCollection.find({}, {}).skip( (pageIndex -1) * pageSize ).limit(pageSize);
        return await cursor.toArray();
    }
}
module.exports = ProductService;
