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

//-----------------4th stp-----------------delete  Document  ----
const deleteDocbyId = async (id) => {
  try {
    // isse jisko choose kiye wo dikhega
    const result = await studentModel.findByIdAndDelete(id);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteOneDoc = async (id) => {
  try {
    //{ _id field name hai}  [id jiska id lenge wo hai ]
    const result = await studentModel.deleteOne({ _id: id });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteOneDocbyAge = async (a) => {
  try {
    //{ _id field name hai}  [id jiska id lenge wo hai ]
    const result = await studentModel.deleteOne({ age: a });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteManyDoc = async (a) => {
  try {
    //{ _id field name hai}  [id jiska id lenge wo hai ]
    const result = await studentModel.deleteMany({ age: a });

    //const result = await studentModel.deleteMany({ age: a }, { name: "Math" },{upsert:true});
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

//-------------------------5th step------------export
export { deleteDocbyId, deleteOneDoc, deleteOneDocbyAge, deleteManyDoc };
