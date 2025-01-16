import { Router } from "express";
import { getAll, create, login } from '../controllers/usuarios.controller.js';
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router();

router.get('/usuarios',verifyJWT,getAll);
router.post('/usuarios',verifyJWT,create);
router.post('/login',login);

export default router;