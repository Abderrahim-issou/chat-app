import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { addMGDto, createGDto, updateGDto } from "../validation/groupSchema";
import ApiError from "../utils/apiError";
import { addMembers, createGroup, deleteGroup, deleteMembers, updateGroup } from "../services/group";
import ApiResponse from "../utils/apiResponse";





export const createGroupHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: createGDto = req.body.data;
    // const user_id: string = req.currUser.id;
    const user_id: string = "699726e6fc4699caf9b69848";
    if(!data || !user_id){
        throw new ApiError(400, 'bad request');
    }
    const group = await createGroup(data, user_id);
    res.status(201).json(
        new ApiResponse(201, {group}, 'group created')
    );
});


export const updateGroupHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: updateGDto = req.body.data;
    // const user_id: string = req.currUser.id;    
    const user_id: string = "699726e6fc4699caf9b69848";    
    const group_id: string = req.params.group_id;

    if(!data || !user_id || !group_id){
        throw new ApiError(400, 'bad request');
    }

    const group = await updateGroup(data, user_id, group_id);
    res.status(201).json(
        new ApiResponse(201, {group}, 'group updated')
    );
});

export const deleteGroupHandler = asyncHandler( async (req: Request, res: Response) => {
    // const user_id: string = req.currUser.id;    
    const user_id: string = "699726e6fc4699caf9b69848";    

    const group_id: string = req.params.group_id;

    if(!user_id || !group_id){
        throw new ApiError(400, 'bad request');
    }

    const group = await deleteGroup(group_id, user_id);
    res.status(201).json(
        new ApiResponse(201, {group}, 'group deleted')
    );
});


export const addMemebersHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: addMGDto = req.body.data;
    // const user_id: string = req.currUser.id;  
    const user_id: string = "699726e6fc4699caf9b69848";    
    const group_id: string = req.params.group_id;

    if(!data || !user_id || !group_id){
        throw new ApiError(400, 'bad request');
    }
    const group = await addMembers(user_id, group_id, data);
    res.status(201).json(
        new ApiResponse(201, {group}, 'memberes added')
    );
});

export const deleteMemebersHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: addMGDto = req.body.data;
    // const user_id: string = req.currUser.id;  
    const user_id: string = "699726e6fc4699caf9b69848";    
    const group_id: string = req.params.group_id;

    if(!data || !user_id || !group_id){
        throw new ApiError(400, 'bad request');
    }
    const group = await deleteMembers(user_id, group_id, data);
    res.status(201).json(
        new ApiResponse(201, {group}, 'memberes deleted')
    );
});



