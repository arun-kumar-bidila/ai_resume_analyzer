import { createToken } from "../lib/utils.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.json({ success: false, message: "All Cred are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.json({ success: false, message: "User already Exists" });
    }

    if (password.length < 6) {
      res.json({ success: false, message: "Password must be of 6 characters" });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    res.json({
      success: true,
      message: "User created successfully",
      token,
      userData: user,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isUser = await User.findOne({ email });

    if (!isUser) {
      res.json({ success: false, message: "Not an existingUser" });
    }

    const isMatch = await bcrypt.compare(password, isUser.password);

    if (!isMatch) {
      res.json({ success: false, message: "Email and password Doesn't match" });
    }

    const token = createToken(isUser._id);

    res.json({
      success: true,
      message: "Login successful",
      token,
      userData: isUser,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
