import { Router } from "express";
import { listarProductosControl } from "../controllers/productosControl.controller";

const rutaProductosControl = Router();
rutaProductosControl.get("/productosControl", listarProductosControl);

export default rutaProductosControl;
