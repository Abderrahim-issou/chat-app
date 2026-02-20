import { Router } from "express";
import { createMessageHandler, deleteMessageHandler, getMessagesByChatHandler, updateMessageHandler } from "../controllers/messages";



const router = Router();

router.get(
    '/:chat_id',
    getMessagesByChatHandler
);

router.post(
    '/',
    createMessageHandler
);

router.put(
    '/:message_id',
    updateMessageHandler
);

router.delete(
    '/:message_id',
    deleteMessageHandler
)

export default router;