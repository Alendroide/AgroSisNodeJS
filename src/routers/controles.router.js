import { Router } from "express";
import {
  listarControles,
  registrarControles,
} from "../controllers/controles.controller.js";

const rutaControles = Router();

rutaControles.get("/controles", listarControles);
rutaControles.post("/controles", registrarControles);

export default rutaControles;
