import { Router } from "express" 
import { ListarEras, 
        RegistarEras, 
        ActualizarEras, 
        EliminarEras, 
        BuscarEras, 
        ReporteErasPorLote,
        ReporteErasPorFecha  } from "../controllers/eras.controller.js"
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router()

router.get("/eras",verifyJWT, ListarEras)
router.get("/eras/:id",verifyJWT, BuscarEras)
router.post("/eras",verifyJWT, RegistarEras)
router.put("/eras/:id",verifyJWT, ActualizarEras)
router.delete("/eras/:id",verifyJWT, EliminarEras)
router.get("/eras/reporte/:id", ReporteErasPorLote)
router.get("/eras/reporte/fecha/:fecha", ReporteErasPorFecha)

export default router