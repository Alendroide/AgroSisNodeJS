import { Router } from "express" 
import { ListarLotes, 
        RegistrarLotes, 
        ActualizarLotes, 
        EliminarLotes, 
        BuscarLotes,
        ListarLotesPorDimensiones,
        ListarLotesPorUbicacion,
        ListarLotesPorEstado,
        GenerarReporteLotes,
        GenerarReporteLotesPorDimensiones,
        GenerarReporteLotesPorUbicacion,
        GenerarReporteLotesPorEstado } from "../controllers/lotes.controller.js"
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router()

router.get("/lotes",verifyJWT, ListarLotes)
router.get("/lotes/:id",verifyJWT, BuscarLotes)
router.post("/lotes",verifyJWT, RegistrarLotes)
router.put("/lotes/:id",verifyJWT, ActualizarLotes)
router.delete("/lotes/:id",verifyJWT, EliminarLotes)
router.get("/lotes/dimensiones",verifyJWT, ListarLotesPorDimensiones)
router.get("/lotes/ubicacion",verifyJWT, ListarLotesPorUbicacion)
router.get("/lotes/estado",verifyJWT, ListarLotesPorEstado)
router.get("/lotes/reporte",verifyJWT, GenerarReporteLotes)
router.get("/lotes/reporte/dimensiones",verifyJWT, GenerarReporteLotesPorDimensiones)
router.get("/lotes/reporte/ubicacion",verifyJWT, GenerarReporteLotesPorUbicacion)
router.get("/lotes/reporte/estado",verifyJWT, GenerarReporteLotesPorEstado)



export default router