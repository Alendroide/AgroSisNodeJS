import { Router } from "express";
import {
  actualizarUsoProductoControl,
  eliminarUsoProductoControl,
  listarUsoProductoControl,
  registrarUsoProductosControl,
} from "../controllers/usoProductoControl.controller.js";

const rutaUsoProductoControl = Router();

rutaUsoProductoControl.get("/usoProductoControl", listarUsoProductoControl);
rutaUsoProductoControl.post(
  "/usoProductoControl",
  registrarUsoProductosControl
);
rutaUsoProductoControl.put(
  "/usoProductoControl/:id",
  actualizarUsoProductoControl
);
rutaUsoProductoControl.delete(
  "/usoProductoControl/:id",
  eliminarUsoProductoControl
);
rutaUsoProductoControl.get("/usoProductoControl/:id", listarUsoProductoControl);

export default rutaUsoProductoControl;
