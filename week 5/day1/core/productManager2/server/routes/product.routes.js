const { model } = require("mongoose");
const productController = require("../controllers/product.controller")




module.exports = (app) => {
    app.post("/api/products/", productController.createProduct)
    app.get("/api/products/",productController.findAllProduct)
    app.get("/api/products/:id", productController.findOneProduct)


}
