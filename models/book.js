const mongoose = require("mongoose");

//fields to  pull from googlebooks api
const Book = mongoose.model("books", new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1
  },
  authors: {
    type: String,
    required: true,
    minlength: 1
  },
  description: {
    type: String,
    required: true,
    minlength: 1
  },
  image: {
    type: String,
    required: true,
    minlength: 1
  },


}))

module.exports.Book = Book;