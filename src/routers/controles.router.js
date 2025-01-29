import { Router } from "express";
import { listarControles } from "../controllers/controles.controller";

const routerControles = Router();

routerControles.get("/controles", listarControles);

export default routerControles;
