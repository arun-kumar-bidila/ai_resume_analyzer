import express from 'express'
import { checkAuth, login, signUp } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const userRouter=express.Router();

userRouter.post("/signup",signUp);
userRouter.post("/login",login)
userRouter.get("/checkAuth",authMiddleware,checkAuth)

export default userRouter;