import { Router } from "express";
import { listarAfecciones } from "../controllers/afecciones.controller.js";

const rutaAfecciones = Router();
rutaAfecciones.get("/afecciones", listarAfecciones);

export default rutaAfecciones;
