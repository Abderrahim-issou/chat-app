import { Router } from "express";
import { confirmResetHandler, loginHandler, registerHandler, resetPasswodHnadler } from "../controllers/auth";



const router = Router();


router.post(
    '/login',
    loginHandler
);

router.post(
    '/register',
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
