import { Router } from "express";
import { createSemilleros, getAllSemilleros, updateSemillero } from "../controllers/semilleros.controller.js";

const semilleros = Router()
semilleros.get("/semilleros",getAllSemilleros)
semilleros.post("/semilleros",createSemilleros)
semilleros.put("/semilleros",updateSemillero)

export default semilleros;