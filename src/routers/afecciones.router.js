import { Router } from "express";
import { listarAfecciones } from "../controllers/afecciones.controller";

rutaAfecciones = Router();
rutaAfecciones.get("/afecciones", listarAfecciones);

export default rutaAfecciones;
