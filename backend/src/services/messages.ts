import Chat from "../models/chat";
import Message, { IMessage } from "../models/message";
import ApiError from "../utils/apiError";
import { createMDto, updateMDto } from "../validation/messageSchema";





export const createMessage = async (data: createMDto | IMessage, user_id: string) => {
    const { content, receiverId, type } = data;

    if(!content || !receiverId || !type){
        throw new ApiError(400, 'bad request');
    }

    const message = await Message.create({
        ...data,
        senderId: user_id
    });

    if(!message){
        throw new ApiError(500, 'internal server error');
    }

    return message;
};

export const updateMessage = async (data: updateMDto, message_id: string, user_id: string) => {
    const { content } = data;
    if(!content || ! message_id || !user_id) {
        throw new ApiError(400, 'bad request ');
    }
    const message = await Message.findById(message_id);
    if(!message) {
        throw new ApiError(404, 'message not found');
    }
    if(message.senderId.toString() != user_id){
        throw new ApiError(402, 'you can not upadate others messages');
    }

    message.content = content;
    message.save();
    return message;
}

export const deleteMessage = async (user_id: string, message_id: string) => {
    if(!message_id || ! user_id) {
        throw new ApiError(400, 'bad request ');
    }
    const message = await Message.findById(message_id);
    if(!message) {
        throw new ApiError(404, 'message not found');
    }
    const deleted = await Message.findOne({
        _id: message_id,
        deleted: { $in: [user_id] }
    });
    console.log(deleted);
    if(deleted){
        throw new ApiError(400, 'message already deleted');
    }
    await Message.updateOne(
        { _id: message_id },
        { $push: { deleted: user_id } }
    );
    return message;
}

export const getMessagesByChat = async (chat_id: string) => {
    if(!chat_id){
        throw new ApiError(400, "bad request");   
    }
    const chat = await Chat.findById(chat_id);
    if(!chat){
        throw new ApiError(404, 'chat not found');
    }
    const messages = await Message.find({chatId: chat_id});
    return messages;
}

