import { Router } from "express";
import {
  actualizarTipoControl,
  buscarTipoControl,
  eliminarTipoControl,
  listarTiposControl,
  registrarTipoControl,
} from "../controllers/tiposControl.controller.js";

const rutaTiposControl = Router();

rutaTiposControl.get("/tiposcontrol", listarTiposControl);
rutaTiposControl.post("/tiposcontrol", registrarTipoControl);
rutaTiposControl.put("/tiposcontrol/:id", actualizarTipoControl);
rutaTiposControl.delete("/tiposcontrol/:id", eliminarTipoControl);
rutaTiposControl.get("/tiposcontrol/:id", buscarTipoControl);

export default rutaTiposControl;
