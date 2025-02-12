import { Router } from "express";
import { getAllDesechos, createDesechos, updateDesechos } from "../controllers/desechos.controller.js";

const desechos = Router()
desechos.get("/desechos",getAllDesechos)
desechos.post("/desechos",createDesechos)
desechos.put("/desechos/:id",updateDesechos)

export default desechos;