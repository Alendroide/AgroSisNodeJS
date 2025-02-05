import { Router } from "express" 
import { ListarEras, RegistarEras, ActualizarEras, EliminarEras, BuscarEras } from "../controllers/eras.controller.js"

const router = Router()

router.get("/eras", ListarEras)
router.get("/eras/:id", BuscarEras)
router.post("/eras", RegistarEras)
router.put("/eras/:id", ActualizarEras)
router.delete("/eras/:id", EliminarEras)

export default router