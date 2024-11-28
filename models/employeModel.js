import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class EmployeModels {
  constructor() {}

  async create(employe) {
    const colEmploye = dbClient.db.collection("employe");
    return await colEmploye.insertOne(employe);
  }

  async getAll() {
    const colEmploye = dbClient.db.collection("employe");
    return await colEmploye.find({}).toArray();
  }

  async getOne(id) {
    const colEmploye = dbClient.db.collection("employe");
    return await colEmploye.findOne({ _id: new ObjectId(id) });
  }

  async delete(id) {
    const colEmploye = dbClient.db.collection("employe");
    return await colEmploye.deleteOne({ _id: new ObjectId(id) });
  }

  async update(id,data) {
    const colEmploye = dbClient.db.collection("employe");
    return await colEmploye.updateOne({_id:new ObjectId(id)},{$set:data})
  }
}

export default new EmployeModels();
