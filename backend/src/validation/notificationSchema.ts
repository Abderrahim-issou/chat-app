import z from "zod";
import { NotificationType } from "../models/notification";




const createNotification = z.object({
    receiverID: z.string(),
    title: z.string(),
    payload: z.record(z.unknown()),
    type: z.nativeEnum(NotificationType),
    isRead: z.boolean(),
    isImportant: z.boolean(),
    isDeleted: z.boolean(),
});

export type createNDTO = z.infer<typeof createNotification>

