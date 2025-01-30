import { Router } from "express";
import {
  listarProductosControl,
  registrarProductosControl,
} from "../controllers/productosControl.controller.js";

const rutaProductosControl = Router();

rutaProductosControl.get("/productosControl", listarProductosControl);
rutaProductosControl.post("/productoscontrol", registrarProductosControl);

export default rutaProductosControl;
