import mongoose from "mongoose";
const employeScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    lastName: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
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
