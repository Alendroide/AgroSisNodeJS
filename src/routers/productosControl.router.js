import { Router } from "express";
import {
  actualizarProductosControl,
  buscarProductosControl,
  eliminarProductosControl,
  listarProductosControl,
  registrarProductosControl,
} from "../controllers/productosControl.controller.js";

const rutaProductosControl = Router();

rutaProductosControl.get("/productosControl", listarProductosControl);
rutaProductosControl.post("/productosControl", registrarProductosControl);
rutaProductosControl.put("/productosControl/:id", actualizarProductosControl);
rutaProductosControl.delete("/productosControl/:id", eliminarProductosControl);
rutaProductosControl.get("/productosControl/:id", buscarProductosControl);

export default rutaProductosControl;
