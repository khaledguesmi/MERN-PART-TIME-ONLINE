
// import mongoose to build the model
const mongoose = require("mongoose")






// the model - the rules the entries need to follow
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the product title is required"],
        minlength : [3, "the product title is Min 3 Chart"]
    },
    price: {
        type: Number,
        required: [true, "the price  is required"]
    },
    description: {
        type: String,
        required: [true, "the description is required"],
        minlength : [8, "the product description is Min 8 Chart"]

    }
}, { timestamps: true });


//  create at and updated at  

module.exports = mongoose.model("Products", productSchema) ;