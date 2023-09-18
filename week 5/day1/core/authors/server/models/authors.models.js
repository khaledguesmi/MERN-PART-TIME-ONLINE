
// import mongoose to build the model
const mongoose = require("mongoose")






// the model - the rules the entries need to follow
const authorsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "the authors title is required"],
        minlength : [3, "the authors title is Min 3 Chart"]
    }
}, { timestamps: true });


//  create at and updated at  

module.exports = mongoose.model("Authors", authorsSchema) ;