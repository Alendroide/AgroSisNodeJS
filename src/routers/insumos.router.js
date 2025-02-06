import { Router } from "express";
import { createInsumo, getAllInsumos, updateInsumos } from "../controllers/insumos.controller.js";

const insumos = Router()
insumos.get("/insumos",getAllInsumos)
insumos.post("/insumos",createInsumo)
insumos.delete("/insumos/:id",updateInsumos)

export default insumos;