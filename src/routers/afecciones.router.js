import { Router } from "express";
import {
  actualizarAfecciones,
  listarAfecciones,
  registrarAfecciones,
} from "../controllers/afecciones.controller.js";

const rutaAfecciones = Router();
rutaAfecciones.get("/afecciones", listarAfecciones);
rutaAfecciones.post("/afecciones", registrarAfecciones);
rutaAfecciones.put("/afecciones/:id", actualizarAfecciones);

export default rutaAfecciones;
