import { Router } from 'express';
import { createUsosHerramientas, getAllUsosHerramientas } from '../controllers/usosHerramientas.controller.js';

const usosHerramientas = Router();

usosHerramientas.get('/usosHerramientas',getAllUsosHerramientas);
usosHerramientas.post('/usosHerramientas',createUsosHerramientas);

export default usosHerramientas;