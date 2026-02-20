import { Types } from "mongoose";
import z from "zod";


const createMessageSchema = z.object({
    receiverId: z.string().refine((val) => Types.ObjectId.isValid(val)),
    chatId: z.string(),
    type: z.string(),
    content: z.string()
});

const updateMessageSchema = z.object({
    content: z.string()
});

export type createMDto = z.infer<typeof createMessageSchema>;
export type updateMDto = z.infer<typeof updateMessageSchema>;