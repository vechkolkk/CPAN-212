// imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import book_router from "./router/book_router.js";
import user_router from "./router/user_router.js";

// variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;

// middleware // should be before routes
app.use(cors());
app.use(express.json()); // Allow to send Json
app.use(express.urlencoded({ extended: true })); // Allow to send form data HTML Forms

// startup
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database is connected");
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});

// routes
app.use('/book', book_router);
app.use('/user', user_router);



