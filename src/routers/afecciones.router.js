import { Router } from "express";
import {
  listarAfecciones,
  registrarAfecciones,
} from "../controllers/afecciones.controller.js";

const rutaAfecciones = Router();
rutaAfecciones.get("/afecciones", listarAfecciones);
rutaAfecciones.post("/afecciones", registrarAfecciones);

export default rutaAfecciones;
