import { Router } from "express"
import { ListarCultivos, 
        RegistrarCultivos, 
        ActualizarCultivos, 
        EliminarCultivos,
        BuscarCultivo,
        ListarCultivosPorEspecie,
        ListarCultivosActivos,
        ListarCultivosPorSiembra,
        ReporteCultivosPorSiembra,
        ReporteCultivosActivos,
        ReporteCultivosPorEspecie } from "../controllers/cultivos.controller.js"
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router()

router.get("/cultivos",verifyJWT, ListarCultivos)
router.post("/cultivos",verifyJWT, RegistrarCultivos)
router.get("/cultivos/:id",verifyJWT, BuscarCultivo)
router.put("/cultivos/:id",verifyJWT, ActualizarCultivos) 
router.delete("/cultivos/:id",verifyJWT, EliminarCultivos)
router.get("/cultivos/especie/:especie",verifyJWT, ListarCultivosPorEspecie)
router.get("/cultivos/activos",verifyJWT, ListarCultivosActivos)
router.get("/cultivos/siembra/:id",verifyJWT, ListarCultivosPorSiembra)
router.get("/reporte/cultivos/siembra/:id",verifyJWT, ReporteCultivosPorSiembra)
router.get("/reporte/cultivos/activos",verifyJWT, ReporteCultivosActivos)
router.get("/reporte/cultivos/especie/:especie",verifyJWT, ReporteCultivosPorEspecie)



export default router