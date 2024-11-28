import mongoose from "mongoose";
const employeScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
    },
    lastName: {
      type: String,
      require: true,
    },
    adress: {
      type: String,
      require: true,
    },
    idDocument: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    isWorking: {
      type: Boolean,
    },
    aboutMe: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("employe", employeScheme);
