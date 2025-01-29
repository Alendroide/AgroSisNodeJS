import { Router } from "express";
import {
  actualizarTipoPlaga,
  listarTipoPlaga,
  registrarTipoPlaga,
} from "../controllers/tipoPlaga.controller.js";

const ruta = Router();

ruta.get("/tipoPlaga", listarTipoPlaga);
ruta.post("/tipoPlaga", registrarTipoPlaga);
ruta.put("/tipoPlaga/:id", actualizarTipoPlaga);
export default ruta;
