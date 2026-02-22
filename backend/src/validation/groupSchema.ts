import { Types } from "mongoose";
import z from "zod";



const createGroupSchema = z.object({
    groupName: z.string(),
    members: z.array(z.string().refine(
        val => Types.ObjectId.isValid(val),
        {message: 'invalid Object id'}
    )),
    createdBy: z.string().refine(val => Types.ObjectId.isValid(val))
});

const MembersGroupSchema = z.object({
    members: z.array(z.string().refine(
        val => Types.ObjectId.isValid(val),
        {message: 'invalid Object id'}
    )),
});

const updateGroupSchema = createGroupSchema.partial();

export type updateGDto = z.infer<typeof updateGroupSchema>
export type createGDto = z.infer<typeof createGroupSchema>
export type addMGDto = z.infer<typeof MembersGroupSchema>
export type deleteMGDto = z.infer<typeof MembersGroupSchema>