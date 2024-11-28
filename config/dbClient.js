import 'dotenv/config';
import { MongoClient } from 'mongodb';
import mongoose from "mongoose";

class DbClient {
  constructor() {
    this.connectDB();
  }

  async connectDB() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=practice`;
    await mongoose.connect(queryString);
  }

  async closeConnet() {
    try {
      await mongoose.disconnect();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new DbClient();