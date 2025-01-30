import { Router } from "express";
import { listarProductosControl } from "../controllers/productosControl.controller.js";

const rutaProductosControl = Router();
rutaProductosControl.get("/productosControl", listarProductosControl);

export default rutaProductosControl;
