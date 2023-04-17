import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
   
   const DB_OPTIONS ={
    user:'geekyshows',
    pass:'123456',
    dbName:'schooldb',
    authsource:'schooldb'
   }
   
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    console.log("Database Connected successfully..");
  } catch (err) {
    console.log(err);
  }
};
export default connectDB;

