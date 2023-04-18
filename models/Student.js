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

//createDoc KO APP.JS ME CALL KR DIYA
const createDoc = async () => {
  try {
    //creating new docoment
    const rohanDoc = new studentModel({
      name: "Rohan",
      age: 25,
      fees: 8500.4,
      hobbies: ["dancing", "reading"],
      isActive: true,
      comments: [{ value: "this is good" }],
    });

    //creating new docoment
    const sumanDoc = new studentModel({
      name: "Suman",
      age: 21,
      fees: 8700.4,
      hobbies: ["dancing", "reading"],
      isActive: true,
      comments: [{ value: "this is good mongoose" }],
    });

    //creating new docoment
    const kunaldoc = new studentModel({
      name: "Kunal",
      age: 27,
      fees: 8400.4,
      hobbies: ["dancing", "reading"],
      isActive: true,
      comments: [{ value: "this is good mongoose" }],
    });
    //save document
    const result = await studentModel.insertMany([
      rohanDoc,
      sumanDoc,
      kunaldoc,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export default createDoc;
