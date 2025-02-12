import { Router } from "express"
import { ListarPlantaciones, RegistrarPlantaciones, ActualizarPlantaciones, EliminarPlantaciones, BuscarPlantaciones } from "../controllers/plantaciones.controller.js"
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router()

router.get("/plantaciones",verifyJWT, ListarPlantaciones)
router.get("/plantaciones/:id",verifyJWT, BuscarPlantaciones)
router.post("/plantaciones",verifyJWT, RegistrarPlantaciones)
router.put("/plantaciones/:id",verifyJWT, ActualizarPlantaciones)
router.delete("/plantaciones/:id",verifyJWT, EliminarPlantaciones)

export default router