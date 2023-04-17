import express from "express";
 import connectDB from './db/connectdb.js'
const app = express();
const port = process.env.PORT || "8000";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// database connection
connectDB(DATABASE_URL);

app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
