
// import mongoose to build the model
const mongoose = require("mongoose")






// the model - the rules the entries need to follow
const jokesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the jokes title is required"],
        minlength : [3, "the jokes title is Min 3 Chart"]
    }
}, { timestamps: true });


//  create at and updated at  

module.exports = mongoose.model("jokes", jokesSchema) ;