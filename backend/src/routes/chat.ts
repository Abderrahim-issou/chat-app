import { Router } from "express";
import { createChatHandler, deleteChatHnadler, getChatsByUserIdHandler } from "../controllers/chat";



const router = Router();


router.get(
    '/',
    getChatsByUserIdHandler
)

router.post(
    '/',
    createChatHandler
);

router.delete(
    '/:chat_id',
    deleteChatHnadler
);

export default router;