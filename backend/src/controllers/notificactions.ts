import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { deleteNotification, clearNotification, createNotification, getnotificationsByUserId } from "../services/notification";
import ApiResponse from "../utils/apiResponse";
import { createNDTO } from "../validation/notificationSchema";



export const getNotificationsHandler = asyncHandler( async (req: Request, res: Response) => {
    const receiverId: string = req.params.receiverId;
    const notifications = await getnotificationsByUserId(receiverId);
    res.status(200).json(
        new ApiResponse(200, notifications, 'notifications retreived successfully')
    );
});

export const createNotificationHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: createNDTO = req.body.data;
    const notification = await createNotification(data);
    res.status(200).json(
        new ApiResponse(200, notification, 'notification created')
    );
});

export const deleteNotificationHandler = asyncHandler( async (req: Request, res: Response) => {
    const notId: string = req.params.notId;
    const notification = await deleteNotification(notId);
    res.status(200).json(
        new ApiResponse(200, notification, 'notification deleted')
    );
});

export const clearNotificationsHandler = asyncHandler(async (req: Request, res: Response) => {
    const  receiverID: string = req.params.receiverID;
    const notifications = await clearNotification(receiverID);
    res.status(200).json(
        new ApiResponse(200, notifications, 'notifications Cleared')
    );
});