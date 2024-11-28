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
     return await employeSchema.findOneAndUpdate(id, data, { new: true });
   }
 }

export default new EmployeModels();
