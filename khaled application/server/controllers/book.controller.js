const Book = require("../models/book.model");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET_KEY;
//Add new Book
module.exports.AddBook = async (req, res) => {
  try { 
    const userPayload = jwt.verify(req.headers.authorization, SECRET);
    console.log(userPayload)
    if (userPayload) {
      const bookToAdd = { ...req.body, creator: userPayload.id };
      const book = await Book.create(bookToAdd);
      res.json({ successMessage: "Book created...", book });
    }
  } catch (err) {
    res
      .status(400)
      .json({ errorMessage: err });
  }
};

// Get All Books
module.exports.ShowAll = (req, res) => {
  Book.find().sort({name:1})
  .then(showBooks =>res.json(showBooks) )
  .catch(err => {res.status(400).json(err)})
};

// Get one Book
module.exports.ShowOne = (req, res) => {
  Book.findById(req.params.id)
  .then(showBook =>res.json(showBook) )
  .catch(err => {res.status(400).json(err)})
};

// Update the Book

module.exports.UpdateBook = (req, res) => {
  console.log(req.body)
  Book.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
  .then(updateBook =>res.json(updateBook) )
  .catch(err => {res.status(400).json(err)})
};

//Delete the Book
module.exports.DeleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
  .then(deleteBook =>res.json(deleteBook) )
  .catch(err => {res.status(400).json(err)})
};
