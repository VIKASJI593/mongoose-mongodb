//const mongoose = require('mongoose');

import mongoose from "mongoose";

const connectDB = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
    .then(() => {
    console.log("Database Connected successfully..");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connectDB;
