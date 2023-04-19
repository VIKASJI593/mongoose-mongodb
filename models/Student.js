import mongoose from "mongoose";
//------------2nd step-----------defining schema---------/
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

//----------3rd step------------------compiling schema--------------/
const studentModel = mongoose.model("student", studentSchema);

//-----------------4th stp-----------------Retreive  Document with Id ----

const getSingleDoc = async () => {
  const result = await studentModel.findById("643e39fdd39b583980ce36d4");
  console.log(result.name);
};

//Retrieve Document By Field With Specific Field
const getDocByFieldSpecificField = async () => {
  const result = await studentModel.find({ name: "sonam" }).select("name age");
  console.log(result);
};

//Retrieve Limited Document
const getLimitedDoc = async () => {
  // const result = await studentModel.find().limit(4);
  const result = await studentModel.find({}, null, { limit: 4 });
  console.log(result);
};

//Retrieve Skip Document
const getSkipDoc = async () => {
  //  const result = await studentModel.find().skip(1);
  const result = await studentModel.find({}, null, { skip: 1 });
  console.log(result);
};

// Count Document
const getDocCount = async () => {
  const result = await studentModel.find().countDocuments();
  console.log(result);
};

//-------sort document-----
const getSortedDoc = async () => {
  //INCRESING ORDER
  //const result = await studentModel.find().sort({ name: 1 });
  //DECREASING ORDER
  const result = await studentModel.find().sort({ name: -1 });
  console.log(result);
};

// Mix Document
const mixDoc = async () => {
  const result = await studentModel.find(
    {},
    { name: 1, age: 1 },
    { limit: 5, skip: 1 }
  );
  console.log(result);
};

// ------------Comparison Query Operator------------
const compDoc = async () => {
  // greater than
  // const result = await studentModel.find({age:{$gt:25}});
  //greater than equal to
  //const result = await studentModel.find({age:{$gte:25}});

  // less than
  //const result = await studentModel.find({ age: { $lt: 25 } });
  //less than equal to
  //const result = await studentModel.find({age:{$lte:25}});

//not equal to
//  const result = await studentModel.find({age:{$ne:25}});

// jiska bhi age 21 25 hai wo find karo
// const result = await studentModel.find({age:{$in:[21,25]}});

// not in array that you find
const result = await studentModel.find({age:{$nin:[21,25]}});
  console.log(result);
};

//---------------------------logical query oprator----------

const logDoc = async () => {
  //and means both are correct
  //const result = await studentModel.find({$and:[{age:27},{fees:6500.4}]});

  //or means any one are correct
  //const result = await studentModel.find({$or:[{age:27},{fees:6500.4}]});

  //and greater than {27 is grater than 25}
  //const result = await studentModel.find({$and:[{age:{$gt:25}},{fees:6500.4}]});

   //and greater than {27 is grater than 25}
   //const result = await studentModel.find({$or:[{age:{$gt:25}},{fees:6500.4}]});

   // not means greater than 25 jiski nhi wo dikhao
   //const result = await studentModel.find({age:{ $not: {$gt: 25}}});

    // nor means dono me se koi ek bhi rhe  to nhi dikhana hai
    const result = await studentModel.find({ $nor: [{age:27}, {fees:6500.4}]});
  console.log(result);
};


//------5th step--------------export all doc---------------------/
export {
  getSingleDoc,
  getDocByFieldSpecificField,
  getLimitedDoc,
  getSkipDoc,
  getDocCount,
  getSortedDoc,
  mixDoc,
  compDoc,
  logDoc
};

/*
import mongoose from "mongoose";
//------------2nd step-----------defining schema---------/
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

//----------3rd step------------------compiling schema--------------/
const studentModel = mongoose.model("student", studentSchema);

//-----------------4th stp-----------------Retreive  Document with Id ----

const getSingleDoc = async () => {
  const result = await studentModel.findById("643e39fdd39b583980ce36d4");
  console.log(result.name,result.age,result.fees.toString());
};
//------5th step--------------export all doc---------------------/
export { getSingleDoc };
*/

/*
import mongoose from "mongoose";
//------------2nd step-----------defining schema---------/
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

//----------3rd step------------------compiling schema--------------/
const studentModel = mongoose.model("student", studentSchema);

//-----------------4th stp-----------------Retreive  Document with Id ----

const getSingleDoc = async () => {
  const result = await studentModel.findById("643e39fdd39b583980ce36d4");
  console.log(result);
};
//------5th step--------------export all doc---------------------/
export { getSingleDoc };
*/
