import { Router } from "express";
import { createTiposEspecie, getAllTiposEspecie, updateTiposEspecie } from "../controllers/tiposEspecie.controller.js";

const tiposEspecie = Router()
tiposEspecie.get("/tiposEspecie",getAllTiposEspecie)
tiposEspecie.post("/tiposEspecie",createTiposEspecie)
tiposEspecie.put("/tiposEspecie/:id",updateTiposEspecie)

export default tiposEspecie;