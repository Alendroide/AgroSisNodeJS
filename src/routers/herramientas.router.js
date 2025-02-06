import { Router } from "express";
import { createHerramientas, getAllHerramientas, updateHerramientas } from "../controllers/herramientas.controller.js";

const herramientas = Router()
herramientas.get('/herramientas',getAllHerramientas)
herramientas.post('/herramientas',createHerramientas)
herramientas.put('/herramientas',updateHerramientas)

export default herramientas;