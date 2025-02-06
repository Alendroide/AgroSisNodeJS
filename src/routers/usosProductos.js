import { Router } from "express";
import { createUsosProductos, getAllUsosProductos, updateUsosProductos } from '../controllers/usosProductos.controller.js';

const usosProductos = Router();

usosProductos.get('/usosProductos',getAllUsosProductos);
usosProductos.post('/usosProductos',createUsosProductos);
usosProductos.put('/usosProductos/:id',updateUsosProductos);

export default usosProductos;