import { Router } from "express";
import { confirmResetHandler, loginHandler, logoutHandler, refereshHandler, registerHandler, resetPasswodHnadler } from "../controllers/auth";



const router = Router();


router.post(
    '/login',
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
