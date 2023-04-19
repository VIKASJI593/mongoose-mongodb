import express from "express";
//--------------6th step--------import mongoose connect-------/
import connectDB from "./db/connectdb.js";
const app = express();
const port = process.env.PORT || "8000";
//----------------7th step------------connect localhost or web url-------------/
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
//-------8th step-----------import alldoc---------------/
import {
  updateDocbyId,
  updateOneDocbyId,
  updateOneDocbyAge,
  updateManyDoc,
} from "./models/Student.js";

//--------9th step-------------database connection----------------/
connectDB(DATABASE_URL);

//----10th step-----call  doc ---to see output---/
//updateDocbyId("643e3b481bc08c94315210c9")
//updateOneDocbyId("643e3b481bc08c94315210c9")

//upsert ke liye galat id denge to id nhi milne pr naya id bna dega
//updateOneDocbyId("743e3b481bc08c94315210c9")

//updateOneDocbyAge(27)
//updateManyDoc(27)

//upsert
updateManyDoc(100)
app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
