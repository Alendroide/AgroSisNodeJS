import { Router } from "express";
import { listarPlagas } from "../controllers/plagas.controller";

const rutaPlagas = Router();

rutaPlagas.get("/plagas", listarPlagas);

export default rutaPlagas;
