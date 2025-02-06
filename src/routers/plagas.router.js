import { Router } from "express";
import {
  actualizarPlagas,
  buscarPlaga,
  eliminarPlagas,
  listarPlagas,
  registrarPlagas,
} from "../controllers/plagas.controller.js";

const rutaPlagas = Router();

rutaPlagas.get("/plagas", listarPlagas);
rutaPlagas.post("/plagas", registrarPlagas);
rutaPlagas.put("/plagas/:id", actualizarPlagas);
rutaPlagas.delete("/plagas/:id", eliminarPlagas);
rutaPlagas.get("/plagas/:id", buscarPlaga);

export default rutaPlagas;
