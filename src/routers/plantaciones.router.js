import { Router } from "express"
import { ListarPlantaciones, RegistrarPlantaciones, ActualizarPlantaciones, EliminarPlantaciones, BuscarPlantaciones } from "../controllers/plantaciones.controller.js"

const router = Router()

router.get("/plantaciones", ListarPlantaciones)
router.get("/plantaciones/:id", BuscarPlantaciones)
router.post("/plantaciones", RegistrarPlantaciones)
router.put("/plantaciones/:id", ActualizarPlantaciones)
router.delete("/plantaciones/:id", EliminarPlantaciones)

export default router