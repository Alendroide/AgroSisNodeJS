import { Router } from "express";
import { createCosechas, getAllCosechas, updateCosechas } from "../controllers/cosechas.controller.js";

const cosechas = Router()
cosechas.get("/cosechas",getAllCosechas)
cosechas.post("/cosechas",createCosechas)
cosechas.put("/cosechas",updateCosechas)

export default cosechas;