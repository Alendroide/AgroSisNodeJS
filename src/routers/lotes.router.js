import { Router } from "express" 
import { ListarLotes, RegistrarLotes, ActualizarLotes, EliminarLotes, BuscarLotes } from "../controllers/lotes.controller.js"

const router = Router()

router.get("/lotes", ListarLotes)
router.get("/lotes/:id", BuscarLotes)
router.post("/lotes", RegistrarLotes)
router.put("/lotes/:id", ActualizarLotes)
router.delete("/lotes/:id", EliminarLotes)


export default router