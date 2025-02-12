import { Router } from "express"
import { ListarCultivos, RegistrarCultivos, ActualizarCultivos, EliminarCultivos,BuscarCultivo } from "../controllers/cultivos.controller.js"
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router()

router.get("/cultivos",verifyJWT, ListarCultivos)
router.post("/cultivos",verifyJWT, RegistrarCultivos)
router.get("/cultivos/:id",verifyJWT, BuscarCultivo)
router.put("/cultivos/:id",verifyJWT, ActualizarCultivos) 
router.delete("/cultivos/:id",verifyJWT, EliminarCultivos)


export default router