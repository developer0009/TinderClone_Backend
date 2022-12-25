import mongoose from "mongoose";
export const connectDB = async () => {
  const URL = process.env.URL;
  try {
    mongoose.set("strictQuery", false);
    const val = await mongoose.connect(URL);
    console.log("connected successfully");
  } catch (error) {
    console.log("connection failed");
    console.log(error.message);
  }
};
