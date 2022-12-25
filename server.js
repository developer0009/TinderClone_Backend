import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import TinderDetails from "./models/TinderDetails.js";
//getting into express
const app = express();

//connecting to DB
dotenv.config();
connectDB();

//middlewares for sending data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//creating API's

//post
app.post("/tinderclone/api/add", async (req, res) => {
  const obj = TinderDetails.insertMany(req.body);
  console.log(req.body);
  res.status(201).json(obj);
});
//get
app.get("/tinderclone/api/add", async (req, res) => {
  const array = await TinderDetails.find();
  res.status(201).json(array);
});

//listening to DB
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("listening at port ", PORT));
