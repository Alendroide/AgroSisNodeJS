import { Router } from "express" 
import { ListarLotes, RegistrarLotes, ActualizarLotes, EliminarLotes, BuscarLotes } from "../controllers/lotes.controller.js"
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router()

router.get("/lotes",verifyJWT, ListarLotes)
router.get("/lotes/:id",verifyJWT, BuscarLotes)
router.post("/lotes",verifyJWT, RegistrarLotes)
router.put("/lotes/:id",verifyJWT, ActualizarLotes)
router.delete("/lotes/:id",verifyJWT, EliminarLotes)


export default router