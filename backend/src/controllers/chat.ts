import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import ApiError from "../utils/apiError";
import { createChat, deleteChat, getChatsByUserId } from "../services/chat";
import { createCDto } from "../validation/chatSchema";
import ApiResponse from "../utils/apiResponse";


export const createChatHandler = asyncHandler( async (req: Request, res: Response) => {
    // const user_id = req.currUser.id;
    const user_id = "699726e6fc4699caf9b69848";
    const data: createCDto = req.body.data;

    if(!user_id || !data){
        throw new ApiError(400, 'bad request');
    }

    const chat = await createChat(data, user_id);
    res.status(201).json(
        new ApiResponse(201, {chat}, 'chat created successfully')
    );
});

export const deleteChatHnadler = asyncHandler( async (req: Request, res: Response) => {
    // const user_id = req.currUser.id;
    const user_id = "699726e6fc4699caf9b69848";
    const chat_id = req.params.chat_id;
    if(!user_id || !chat_id){
        throw new ApiError(400, 'bad request');
    }
    const chat = await deleteChat(chat_id, user_id);
    res.status(200).json(
        new ApiResponse(200, {chat}, 'chat deleted')
    );
})

export const getChatsByUserIdHandler = asyncHandler( async ( req: Request, res: Response) => {
    // const user_id = req.currUser.id;
    const user_id = "699726e6fc4699caf9b69848";
    if(!user_id ){
        throw new ApiError(400, 'bad request');
    }
    const chats = await getChatsByUserId(user_id);
    res.status(200).json(
        new ApiResponse(200, {chats}, 'chats retreived successfully')
    );
})



