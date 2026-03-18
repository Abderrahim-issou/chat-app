import { model, Schema } from "mongoose";

export enum NotificationType {
  NEW_MESSAGE = "NEW_MESSAGE",
  NEW_CHAT = "NEW_CHAT",
  APP_NOTIFICATION = "APP_NOTIFICATION",
  NEW_CHAT_REQUEST = "NEW_CHAT_REQUEST",
}



export interface INotification extends Document {
    receiverID: string;
    title: string;
    payload: Record<string, unknown>;
    type: NotificationType;
    isRead: boolean;
    isImportant: boolean;
    isDeleted: boolean
};

const notificationSchema = new Schema<INotification>({
    receiverID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    payload: {
        type: Object,
        default: {}
    },
    type: {
        type: String,
        enum: Object.values(NotificationType),
        required: true
    },
    isRead: {
        type: Boolean,
        required: true, 
        default: false
    },
    isImportant: {
        type: Boolean,
        required: true, 
        default: false
    },
    isDeleted: {
        type: Boolean,
        required: true, 
        default: false
    }
}, {timestamps: true});

const Notification = model('Notification', notificationSchema);
export default Notification;