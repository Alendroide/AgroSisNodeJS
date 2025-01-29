import { Router } from "express";
import { listarControles } from "../controllers/controles.controller.js";

const rutaControles = Router();

rutaControles.get("/controles", listarControles);

export default rutaControles;
