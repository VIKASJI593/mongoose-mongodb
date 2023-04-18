import mongoose from "mongoose";
/********************2nd step**************defining schema************/
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

/*****3rd step****************compiling schema*** */
const studentModel = mongoose.model("student", studentSchema);

/**********4th stp****************Retreive All Document*******/
const getAlldoc = async () => {
  const result = await studentModel.find();

  result.forEach(
    (item) => console.log(
      item.name,
      item.age,
      item.fees.toString(),
      item.hobbies[0],
      item.hobbies[1],
      item.isActive,
      item.comments[0].value,
      item.comments[0].publish,
      item.join
    )
  );
};
/****5th step*********************export all doc********** */
export { getAlldoc };
