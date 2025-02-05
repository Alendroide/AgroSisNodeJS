import { Router } from "express";
import { createEspecies, getAllEspecies, updateEspecies } from "../controllers/especies.controller.js";

const especies = Router()
especies.get("/especies",getAllEspecies)
especies.post("/especies",createEspecies)
especies.put("/especies",updateEspecies)

export default especies;