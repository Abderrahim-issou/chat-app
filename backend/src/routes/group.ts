import { Router } from "express";
import { addMemebersHandler, createGroupHandler, deleteGroupHandler, deleteMemebersHandler, updateGroupHandler } from "../controllers/group";


const router = Router();


router.post(
    '/',
    createGroupHandler
);

router.put(
    '/:group_id',
    updateGroupHandler
);

router.delete(
    '/:group_id',
    deleteGroupHandler
);

router.patch(
    '/add/:group_id',
    addMemebersHandler
);

router.patch(
    '/remove/:group_id',
    deleteMemebersHandler
);

export default router;