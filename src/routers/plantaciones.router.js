import { Router } from "express"
import { ListarPlantaciones, 
        RegistrarPlantaciones, 
        ActualizarPlantaciones, 
        EliminarPlantaciones, 
        BuscarPlantaciones, 
        ListarPlantacionesPorEraYCultivo,
        ListarPlantacionesPorEra,
        ListarPlantacionesPorCultivo,
        ListarPlantacionesPorCultivoYEra,
        ReportePlantacionesPorEra,
        ReportePlantacionesPorCultivo,
        ReportePlantacionesPorCultivoYEra } from "../controllers/plantaciones.controller.js"
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router()

router.get("/plantaciones",verifyJWT, ListarPlantaciones)
router.get("/plantaciones/:id",verifyJWT, BuscarPlantaciones)
router.post("/plantaciones",verifyJWT, RegistrarPlantaciones)
router.put("/plantaciones/:id",verifyJWT, ActualizarPlantaciones)
router.delete("/plantaciones/:id",verifyJWT, EliminarPlantaciones)

router.get("/plantaciones/era/:era",verifyJWT, ListarPlantacionesPorEra)
router.get("/plantaciones/cultivo/:cultivo",verifyJWT, ListarPlantacionesPorCultivo)
router.get("/plantaciones/:era/:cultivo",verifyJWT, ListarPlantacionesPorCultivoYEra)
router.get("/plantaciones/reporte/:era/:cultivo/",verifyJWT, ListarPlantacionesPorEraYCultivo)
router.get("/plantaciones/reporte/:era",verifyJWT, ReportePlantacionesPorEra)
router.get("/plantaciones/reporte/:cultivo",verifyJWT, ReportePlantacionesPorCultivo)
router.get("/plantaciones/reporte/:cultivo/:era",verifyJWT, ReportePlantacionesPorCultivoYEra)



export default router