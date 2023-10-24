const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "the title must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Name is required"],
      minlength: [5, "the name must be at least 3 characters"],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
