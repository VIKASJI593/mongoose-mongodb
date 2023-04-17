import express from "express";
 import connectDB from './db/connectdb.js'
const app = express();
const port = process.env.PORT || "8000";

//auhentication
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://geekyshows:123456@127.0.0.1:27017/schooldb?authsource=schooldb";

// database connection
connectDB(DATABASE_URL);

app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
