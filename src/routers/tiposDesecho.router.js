import { Router } from "express";
import { createTiposDesecho, getAllTiposDesecho, updateTiposDesecho } from "../controllers/tiposDesecho.controller.js";

const tiposDesecho = Router()
tiposDesecho.get("/tiposDesecho",getAllTiposDesecho)
tiposDesecho.post("/tiposDesecho",createTiposDesecho)
tiposDesecho.put("/tiposDesecho",updateTiposDesecho)

export default tiposDesecho;