import express from "express";
import connectDB from './db/connectdb.js'
import createDoc from "./models/Student.js"; 
const app = express();
const port = process.env.PORT || "8000";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// database connection
connectDB(DATABASE_URL);

//create and save document  {createdoc ko call kr diya}
createDoc()

app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
