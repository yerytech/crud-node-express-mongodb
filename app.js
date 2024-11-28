import 'dotenv/config';
import express from 'express';
import routesEmploye from './routes/employeRoutes.js';
import dbClient from "./config/dbClient.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/employe", routesEmploye);

try {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Elserve esta corriendo el puero ${PORT}`);
  });
} catch (error) {
  console.log(error);
}

process.on("SIGINT", async () => {
  await dbClient.closeConnet();
  console.log("Conexion cerrada");
  process.exit(0);
});

