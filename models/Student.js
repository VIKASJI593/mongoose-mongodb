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

//-----------------4th stp-----------------update  Document with Id ----
const updateDocbyId = async (id) => {
  try {
    // isse jisko choose kiye wo dikhega
    //const result = await studentModel.findByIdAndUpdate(id, { name: "sunil" });

    //isse updated document dikhega
    const result = await studentModel.findByIdAndUpdate(
      id,
      { name: "Sameer" },
      { returnDocument: "after" }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateOneDocbyId = async (id) => {
  try {
    //{ _id field name hai}  [id jiska id lenge wo hai ]
    //const result = await studentModel.updateOne({ _id: id }, { name: "Sujit" });

    // upsert
    const result = await studentModel.updateOne(
      { _id: id },
      { name: "Arjun" },
      { upsert: true }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateOneDocbyAge = async (a) => {
  try {
    //{ _id field name hai}  [id jiska id lenge wo hai ]
    const result = await studentModel.updateOne({ age: a }, { name: "Mouse" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateManyDoc = async (a) => {
  try {
    //{ _id field name hai}  [id jiska id lenge wo hai ]
    // const result = await studentModel.updateMany({ age: a }, { name: "Dollar" });

    const result = await studentModel.updateMany({ age: a }, { name: "Math" },{upsert:true});
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export { updateDocbyId, updateOneDocbyId, updateOneDocbyAge, updateManyDoc };
