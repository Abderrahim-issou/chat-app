import { Router } from "express";
import { loginSchema, registerSchema } from "../validation/userSchema";
import validateRequest from "../middlewares/validateRequest";
import { confirmResetHandler, loginHandler, logoutHandler, refereshHandler, registerHandler, resetPasswodHnadler } from "../controllers/auth";



const router = Router();


router.post(
    '/login',
    validateRequest(loginSchema),
    loginHandler
);

router.post(
    '/logout',
    logoutHandler
);

router.post(
    '/refresh',
    refereshHandler
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
