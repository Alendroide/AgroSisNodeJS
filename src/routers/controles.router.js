import { Router } from "express";
import {
  actualizarControles,
  eliminarControles,
  listarControles,
  registrarControles,
} from "../controllers/controles.controller.js";

const rutaControles = Router();

rutaControles.get("/controles", listarControles);
rutaControles.post("/controles", registrarControles);
rutaControles.put("/controles/:id", actualizarControles);
rutaControles.delete("/controles/:id", eliminarControles);

export default rutaControles;
