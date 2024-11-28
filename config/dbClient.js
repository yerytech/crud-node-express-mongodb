import 'dotenv/config';
import { MongoClient } from 'mongodb';

class DbClient{
    constructor() {
      const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=practice`;
      this.client = new MongoClient(queryString, {
        tls: true,
        tlsInsecure: false,
        // tlsAllowInvalidCertificates: false,
        // serverSelectionTimeoutMS: 5000,
        // useUnifiedTopology: true,
      });
        this.DBConect();
    }

    async DBConect() {
        try {
            await this.client.connect();
            this.db = this.client.db('business');
            console.log('conectado a mongo');
            
      } catch (e) {
        console.log(e);
        
      }
  }


}

export default new DbClient;