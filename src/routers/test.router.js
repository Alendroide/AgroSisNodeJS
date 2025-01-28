import { Router } from "express";
import testController from "../controllers/test.controller.js";
import verifyJWT from "../middlewares/verifyJWT.middleware.js";

const router = Router();

router.get("/test", testController);

export default router;
