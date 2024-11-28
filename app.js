import 'dotenv/config';
import express from 'express';
import routesEmploye from './routes/employeRoutes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/employe',routesEmploye);
const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => {
    console.log(`Elserve esta corriendo el puero ${PORT}`);
    
})

