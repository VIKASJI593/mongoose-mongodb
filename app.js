import express from "express";
import mongoose from "mongoose";
import connectDB from './db/connectdb.js'
const app = express();
const port = process.env.PORT || "8000";

connectDB()
  
app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
