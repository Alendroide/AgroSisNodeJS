import { Router } from "express"

import { ListarPhs, RegistrarPhs, ActualizarPhs, EliminarPhs, BuscarPhs } from "../controllers/pHs.controller.js"

const router = Router()

router.get("/pHs", ListarPhs)
router.get("/pHs/:id", BuscarPhs)
router.post("/pHs", RegistrarPhs)
router.put("/pHs/:id", ActualizarPhs)
router.delete("/pHs/:id", EliminarPhs)


export default router