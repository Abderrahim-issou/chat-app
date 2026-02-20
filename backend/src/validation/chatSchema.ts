import { Types } from "mongoose";
import z from "zod";
import { chatTypeEnum } from "../models/chat";


const createChatSchema = z.object({
   members: z.array(z.string().refine(
    (val) => Types.ObjectId.isValid(val) ,
    {message: 'object id not valid'}
   )),
   chatType: z.nativeEnum(chatTypeEnum),
   groupId: z.string().refine(
    (val) => Types.ObjectId.isValid(val) ,
    {message: 'object id not valid'}
   ).optional()
});


export type createCDto = z.infer<typeof createChatSchema>;
