import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI).then(() => {
      console.log("Database connected");
    });
  } catch (error) {
    console.log("Error in connecting database" + error.message);
  }
};
