import express from "express";
const app = express();
const port = process.env.PORT || "8000";

import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=> {
 
  console.log("Database Connected successfully..");
});
  
app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
