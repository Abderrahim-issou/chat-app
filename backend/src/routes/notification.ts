import { Router } from "express";
import { clearNotificationsHandler, createNotificationHandler, deleteNotificationHandler, getNotificationsHandler } from "../controllers/notificactions";


const router = Router();

router.get(
    '/:receiverId',
    getNotificationsHandler
);

router.post(
    '/',
    createNotificationHandler
);

router.delete(
    '/:notId',
    deleteNotificationHandler
);

router.delete(
    '/clear/:receiverID',
    clearNotificationsHandler
);

export default router;