import { Router } from "express";
import { createHumedadAmbiental, getAllHumedadAmbiental } from "../controllers/humedadAmbiental.controller.js";

const humedadAmbiental = Router();

humedadAmbiental.get("/humedadAmbiental",getAllHumedadAmbiental)
humedadAmbiental.post("/humedadAmbiental",createHumedadAmbiental)



export default humedadAmbiental;