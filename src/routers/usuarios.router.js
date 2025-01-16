import { Router } from "express";
import { getAll } from '../controllers/usuarios.controller.js';
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router();

router.get('/usuarios',getAll);

export default router;