import jwt, { decode } from "jsonwebtoken";
import User from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.json({ success: false, message: "Token doesn't exist" });
    }

    const decoded = await jwt.verify(token, process.env.SECRET);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.json({ success: false, message: "Not a verified User" });
    }

    req.user=user;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authMiddleware;