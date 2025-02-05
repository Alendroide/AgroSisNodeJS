import { Router } from "express"
import { ListarHumedad, RegistrarHumedad,ActualizarHumedad, EliminarHumedad,BuscarHumedad
}from "../controllers/humedadTerreno.controller.js"

const router = Router()

router.get("/humedadTerreno", ListarHumedad)
router.post("/humedadTerreno", RegistrarHumedad)
router.put("/humedadTerreno/:id", ActualizarHumedad)
router.delete("/humedadTerreno/:id", EliminarHumedad)
router.get("/humedadTerreno/:id", BuscarHumedad)


export default router