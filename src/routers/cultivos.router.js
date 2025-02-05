import { Router } from "express"
import { ListarCultivos, RegistrarCultivos, ActualizarCultivos, EliminarCultivos,BuscarCultivo } from "../controllers/cultivos.controller.js"

const router = Router()

router.get("/cultivos", ListarCultivos)
router.post("/cultivos", RegistrarCultivos)
router.get("/cultivos/:id", BuscarCultivo)
router.put("/cultivos/:id", ActualizarCultivos) 
router.delete("/cultivos/:id", EliminarCultivos)


export default router