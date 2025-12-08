import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = 5001;

//db config
connectDB();

//middleware setup
app.use(express.json());
app.use(cors());


//routes setup
app.use("/api/auth",userRouter);

app.get("/status", (req, res) => {
  res.send("Server is live");
});

app.listen(port, () => {
  console.log("Server running on port : " + port);
});
