import { Router } from "express";
import listarTipoPlaga from "../controllers/tipoPlaga.controller.js";

const ruta = Router();

ruta.get("/tipoPlaga", listarTipoPlaga);
