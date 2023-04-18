import express from "express";
import connectDB from './db/connectdb.js'
import {createDoc, createMultiDoc} from "./models/Student.js"; 
const app = express();
const port = process.env.PORT || "8000";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

// database connection
connectDB(DATABASE_URL);

//create and save document  {createdoc ko STUDENT.JS SE LIYA HAI}
//createDoc('Sumit',29,8666.45,['Gaming','Dancing'],false,[{value:'This is bad'}])
createDoc()

createMultiDoc()

app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
