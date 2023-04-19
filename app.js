import express from "express";

import connectDB from "./db/connectdb.js";
const app = express();
const port = process.env.PORT || "8000";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
//--------------------6th step---------------import models
import { deleteDocbyId,deleteOneDoc,deleteOneDocbyAge,deleteManyDoc } from "./models/Student.js";


connectDB(DATABASE_URL);

//----7th step-----call  doc ---to see output---/

//deleteDocbyId("643e3b481bc08c94315210c9");
//deleteOneDoc("643e39fdd39b583980ce36d4")
//deleteOneDocbyAge(27)
deleteManyDoc(27)

app.listen(port, () => {
  console.log(`Yupp! My Express server listening at http://localhost:${port}`);
});
