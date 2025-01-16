import { Router } from "express";
import { getAll, create, login, update } from '../controllers/usuarios.controller.js';
import verifyJWT from '../middlewares/verifyJWT.middleware.js';

const router = Router();

router.get('/usuarios',verifyJWT,getAll);
router.post('/usuarios',verifyJWT,create);
router.post('/login',login);
router.put('/usuarios/:id',verifyJWT,update);

export default router;