import mongoose from "mongoose";
//defining schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, trim: true },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5500.5,
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// compiling schema
const studentModel = mongoose.model("student", studentSchema);

//Retreive All Document
const getAlldoc = async() =>{
  const result = await studentModel.find()
  console.log(result);
}

export  {getAlldoc};
