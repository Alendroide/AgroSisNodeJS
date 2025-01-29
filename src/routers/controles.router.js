import { Router } from "express";
import {
  actualizarControles,
  listarControles,
  registrarControles,
} from "../controllers/controles.controller.js";

const rutaControles = Router();

rutaControles.get("/controles", listarControles);
rutaControles.post("/controles", registrarControles);
rutaControles.put("/controles/:id", actualizarControles);

export default rutaControles;
