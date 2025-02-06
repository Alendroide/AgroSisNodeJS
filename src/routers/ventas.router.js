import { Router } from "express";
import { createVentas, getAllVentas, updateVentas } from "../controllers/ventas.controller.js";

const ventas = Router()
ventas.get("/ventas",getAllVentas)
ventas.post("/ventas",createVentas)
ventas.put("/ventas",updateVentas)

export default ventas;