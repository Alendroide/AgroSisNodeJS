import { Router } from "express";
import { getAll, create } from '../controllers/usuarios.controller.js';
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router();

router.get('/usuarios',verifyJWT,getAll);
router.post('/usuarios',verifyJWT,create);

export default router;