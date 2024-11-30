import express from 'express';
const route = express();
import employeController from '../controllers/employeController.js'
route.post("/",employeController.create);
route.get('/:id',employeController.getOne);
route.get("/",employeController.getAll);
route.put("/:id", employeController.update);
route.patch("/:id", employeController.updateThat);  
route.delete('/:id', employeController.delete);

export default route;