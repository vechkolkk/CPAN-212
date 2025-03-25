import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// 1 - Register
// 1 - Parse info
// 2 - hash password
// 3 - save
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then((hashedPassword) => {
    let newUser = new User({ email, password: hashedPassword });

    newUser.save().then(() => {
      res.json({ message: "User created successfully" });
    });
  });
});

// 2 - Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then((userAccount) => {
        if(!userAccount){
            return res.status(400).json({ message: "User not found" });
        }
        bcrypt.compare(password, userAccount.password)
        .then((compareResults) => {
            if(compareResults) {
                res.json({ message: "User logged in successfully" });
            }
        })
    })
    .catch((err) => {
      console.log(err);
      return res.json({ message: "User not found" });
    });
});

export default router;
