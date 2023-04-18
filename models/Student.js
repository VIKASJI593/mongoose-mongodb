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
const createDoc = async (nm,ag,fe,hob,isact,comt) => {
  try {
    //creating new docoment
    const studentdoc = new studentModel({
      name: nm,
      age: ag,
      fees: fe,
      hobbies: hob,
      isActive: isact,
      comments: comt,
    });
    //save document
    const result = await studentdoc.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export default createDoc
