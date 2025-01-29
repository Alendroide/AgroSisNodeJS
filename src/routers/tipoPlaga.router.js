import { Router } from "express";
import {
  listarTipoPlaga,
  registrarTipoPlaga,
} from "../controllers/tipoPlaga.controller.js";

const ruta = Router();

ruta.get("/tipoPlaga", listarTipoPlaga);
ruta.post("tipoPlaga", registrarTipoPlaga);
export default ruta;
