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
      const studentdoc = new studentModel({
        name: "rahul",
        age: 5,
        fees: 6500.4,
        hobbies: ["dancing", "reading"],
        isActive: true,
        comments: [{ value: "this is good mongoose" }],
      });
      //save document
      const result = await studentdoc.save();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

const createMultiDoc = async () => {
  try {
    //creating new docoment
    const pritiDoc = new studentModel({
      name: "Priti",
      age: 25,
      fees: 8500.4,
      hobbies: ["dancing", "reading"],
      isActive: true,
      comments: [{ value: "this is good" }],
    });

    //creating new docoment
    const kabirDoc = new studentModel({
      name: "Kabir",
      age: 21,
      fees: 8700.4,
      hobbies: ["dancing", "reading"],
      isActive: true,
      comments: [{ value: "this is good mongoose" }],
    });

    //creating new docoment
    const jaydoc = new studentModel({
      name: "Jay",
      age: 27,
      fees: 8400.4,
      hobbies: ["dancing", "reading"],
      isActive: true,
      comments: [{ value: "this is good mongoose" }],
    });
    //save document
    const result = await studentModel.insertMany([
      pritiDoc,
      kabirDoc,
      jaydoc,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export  {createDoc, createMultiDoc};
