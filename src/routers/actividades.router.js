import { Router } from "express";
import { createActividad, getAllActividad, updateActividad } from "../controllers/actividades.controller.js";

const actividades = Router()
actividades.get('/actividad',getAllActividad)
actividades.post('/actividad',createActividad)
actividades.put('/actividad/:id',updateActividad)

export default actividades;