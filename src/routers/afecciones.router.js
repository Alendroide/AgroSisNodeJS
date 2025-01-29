import { Router } from "express";
import {
  actualizarAfecciones,
  buscarAfecciones,
  eliminarAfecciones,
  listarAfecciones,
  registrarAfecciones,
} from "../controllers/afecciones.controller.js";

const rutaAfecciones = Router();
rutaAfecciones.get("/afecciones", listarAfecciones);
rutaAfecciones.post("/afecciones", registrarAfecciones);
rutaAfecciones.put("/afecciones/:id", actualizarAfecciones);
rutaAfecciones.delete("/afecciones/:id", eliminarAfecciones);
rutaAfecciones.get("/afecciones/:id", buscarAfecciones);

export default rutaAfecciones;
