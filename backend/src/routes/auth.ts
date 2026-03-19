import { Router } from "express";
import { confirmResetHandler, loginHandler, registerHandler, resetPasswodHnadler } from "../controllers/auth";
import { loginSchema, registerSchema } from "../validation/userSchema";
import validateRequest from "../middlewares/validateRequest";



const router = Router();


router.post(
    '/login',
    validateRequest(loginSchema),
    loginHandler
);

router.post(
    '/register',
    validateRequest(registerSchema),
    registerHandler
);

router.post(
    '/reset-password',
    resetPasswodHnadler
);

router.post(
    '/rest-confirm',
    confirmResetHandler
);


export default router;
