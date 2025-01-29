import { Router } from "express";
import {
  actualizarPlagas,
  listarPlagas,
  registrarPlagas,
} from "../controllers/plagas.controller.js";

const rutaPlagas = Router();

rutaPlagas.get("/plagas", listarPlagas);
rutaPlagas.post("/plagas", registrarPlagas);
rutaPlagas.put("/plagas/:id", actualizarPlagas);

export default rutaPlagas;
