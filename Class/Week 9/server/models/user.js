import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model("users", userSchema); // mongodb will lowercase the model name to "user(s)"

export default User;