import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  release_date: {
    type: String,
  },
  isbn: {
    type: String,
  },
  // title: String,
  // author: String,
  // publisher: String,
  // pages: Number,
  // release_date: String,
  // isbn : String,
});

const Book = mongoose.model("books", bookSchema);

export default Book;
