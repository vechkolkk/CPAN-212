import express from "express";
import Book from "../models/book.js";

const router = express.Router();
// 1 - Fetch all
router.get("/", (req, res) => {
  Book.find().then((result) => {
    res.json(result);
  });
});
// 2 - Fetch by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Book.findById(id).then((result) => {
    res.json(result);
  });
});
// 3 - search
router.get("/search", (req, res) => {
  const filters = {};

  // query:
  if (req.query.title) {
    filters.title = req.query.title;
  }
  if (req.query.pages) {
    let pages = parseInt(req.query.pages);
    if (req.query.logicalOperators) {
      switch (req.query.logicalOperators) {
        case gte:
          filters.pages = { $gte: { pages } };
          break;
        case lte:
          filters.pages = { $lte: { pages } };
          break;

        default:
          break;
      }
    }
    filters.pages = req.query.title;
  }
  // 4 - update
  router.put("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id).then(() => {
      res.json({ message: "update successful" });
    });
  });

  // 5 - delete
  router.delete("/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id).then(() => {
      res.json({ message: "delete successful" });
    });
  });

  // 6 - create
  router.post("/save", (req, res) => {
    const { title, author, publisher } = req.body;

    let newBook = new Book({
      title,
      author,
      publisher,
      page: 500,
    });

    newBook.save().then(() => {
      res.json({ message: "Data Saved" });
    });
  });

  Book.find(filters).then((result) => {
    res.json(result);
  });
});

export default router;
