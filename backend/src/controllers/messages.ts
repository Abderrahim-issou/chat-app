import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import { createMDto, updateMDto } from "../validation/messageSchema";
import ApiError from "../utils/apiError";
import { createMessage, deleteMessage, getMessagesByChat, updateMessage } from "../services/messages";
import ApiResponse from "../utils/apiResponse";




export const createMessageHandler = asyncHandler( async (req: Request, res: Response) => {

    const data: createMDto = req.body.data;
    if(!data) {
        throw new ApiError(400, 'Bad Request');
    }
    const user_id: string = req.currUser.id;
    const message = await createMessage(data, user_id);
    if(!message){
        throw new ApiError(400, 'Bad Request');
    }
    res.status(201).json(
        new ApiResponse(201, {message}, 'message created')
    );
});

export const deleteMessageHandler = asyncHandler( async (req: Request, res: Response) => {
    const message_id: string = req.params.message_id;
    // const user_id: string = req.currUser.id;
    const user_id: string = "699726e6fc4699caf9b69848";


    const message = await deleteMessage(user_id, message_id);
    if(!message){
        throw new ApiError(500, 'message is not deleted');
    }
    res.status(200).json(
        new ApiResponse(200, {message}, 'message dleted')
    );
}); 

export const updateMessageHandler = asyncHandler( async (req:Request, res: Response) => {
    const data: updateMDto = req.body.data;
    const message_id: string = req.params.message_id;
    const user_id: string = req.currUser.id;


    if(!data || !message_id){
        throw new ApiError(400, 'bad request');
    }
    const message = await updateMessage(data, message_id, user_id);
    if(!message){
        throw new ApiError(500, 'message is not updated');
    }
    res.status(201).json(
        new ApiResponse(201, {message}, 'messsage updated')
    );
});

export const getMessagesByChatHandler = asyncHandler( async (req: Request, res: Response) => {
    const chat_id: string = req.params.chat_id;
    if(!chat_id){
        throw new ApiError(400, 'bad request');
    }
    const messages = await getMessagesByChat(chat_id);
    if(!messages){
        throw new ApiError(500, 'internal sercer Error');
    }
    res.status(200).json(
        new ApiResponse(200, {messages}, 'messages retreived')
    );
})