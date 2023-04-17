/*----------------async await------------------ */
import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected successfully..");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;


/**----------------------then-------------------- */
/*
//const mongoose = require('mongoose');
import mongoose from "mongoose";

const connectDB = (DATABASE_URL) => {
  return mongoose.connect(DATABASE_URL)
    .then(() => {
    console.log("Database Connected successfully..");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connectDB;
*/