import Chat from '../models/chat';
import User from '../models/user';
import ApiError from '../utils/apiError';
import { createCDto } from '../validation/chatSchema';

export const createChat = async (data: createCDto, user_id: string) => {
  if (!data || !user_id) {
    throw new ApiError(400, 'bad request');
  }
  const user = await User.findById(user_id);
  if (!user) {
    throw new ApiError(404, 'user not found');
  }
  const chat = await Chat.create({
    ...data,
    startedBy: user_id,
  });
  if (!chat) {
    throw new ApiError(500, 'internal server error');
  }
  return chat;
};

export const deleteChat = async (chat_id: string, user_id: string) => {
  if (!chat_id || !user_id) {
    throw new ApiError(400, 'bad request');
  }
  const chat = await Chat.findById(chat_id);
  const user = await User.findById(user_id);
  if (!chat) {
    throw new ApiError(404, 'chat not found');
  }
  if (!user) {
    throw new ApiError(404, 'chat not found');
  }
  const existe = await Chat.findOne({
    _id: chat_id,
    deleted: { $in: [user_id] },
  });
  if (existe) {
    throw new ApiError(400, 'you already deleted this chat');
  }
  const updatedChat = await Chat.updateOne({ _id: chat_id }, { $push: { deleted: user_id } });
  return updatedChat;
};

export const getChatsByUserId = async (user_id: string) => {
  if (!user_id) {
    throw new ApiError(400, 'bad request');
  }
  const user = await User.findById(user_id);

  if (!user) {
    throw new ApiError(404, 'chat not found');
  }
  const chats = await Chat.find({
    members: { $in: [user_id] }
  });

  if(!chats){
    throw new ApiError(500, 'internal server error');
  }
  //TODO: handle bloked logic
  return chats;
};
