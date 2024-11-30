import { ObjectId } from "mongodb";
 import employeSchema from "../schema/employeSchema.js";

class EmployeModels {
  constructor() {}

  async create(employe) {
    return await employeSchema.create(employe);
  }

  async getAll() {
    return await employeSchema.find();
  }

  async getOne(id) {
    return await employeSchema.findById(id);
  }

  async delete(id) {
    return await employeSchema.deleteOne(id);
  }

  async update(id, data) {
    return await employeSchema.findOneAndUpdate(
      { _id: new ObjectId(id) },
      data,
      {
        new: true,
      }
    );
  }

  async updateThat(id, data) {
    return await employeSchema.findOneAndUpdate(
      { _id: new ObjectId(id) },
      data,
      {
        new: true,
        runValidators: true,
      }
    );
  }
}
export default new EmployeModels();
