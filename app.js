import express from "express";
//--------------6th step--------import mongoose connect-------/
import connectDB from './db/connectdb.js'
const app = express();
const port = process.env.PORT || "8000";
//----------------7th step------------connect localhost or web url-------------/
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
//-------8th step-----------import alldoc---------------/
import {updateDocbyId } from "./models/Student.js"; 

//--------9th step-------------database connection----------------/ 
connectDB(DATABASE_URL);

//----10th step-----call  doc ---to see output---/
updateDocbyId("643e3b481bc08c94315210c9")

app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
