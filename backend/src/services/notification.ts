import Notification from "../models/notification";
import User from "../models/user";
import ApiError from "../utils/apiError";
import { createNDTO } from "../validation/notificationSchema";


export const createNotification = async (data: createNDTO) => {
    const notification = await Notification.create(data);
    return notification;
}

export const deleteNotification = async (notId: string) => {
    const notification = await Notification.findById(notId);
    if(!notification){
        throw new ApiError(404, 'notification not found');
    }
    notification.isDeleted = true;
    notification.save();
    return notification;
}

export const clearNotification = async (receiverId: string) => {
    const user = await User.findById(receiverId);
    if(!user){
        throw new ApiError(404, 'user not found');
    }
    const notifications = await Notification.updateMany(
        { receiverID: receiverId },
        { $set: { isDeleted: true } },
    );
    return notifications;
}

export const getnotificationsByUserId = async (receiverId: string) => {
    if(!receiverId){
        throw new ApiError(400, 'reciever id is required');
    }
    const receiver = await User.findById(receiverId);
    if(!receiver){
        throw new ApiError(404, 'user not found');
    }
    const notifications = await Notification.find({receiverID: receiverId, isDeleted: false});
    return notifications;
}