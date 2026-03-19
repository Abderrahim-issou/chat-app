import { Document, model, Schema, Types } from "mongoose";

export interface IMessage extends Document {
    receiverId: Types.ObjectId;
    senderId: Types.ObjectId;
    chatId: Types.ObjectId;
    type: string;
    content: string;
    isSeen: boolean;
    seenAt: Date;
    isUpdated: boolean;
    deleted: Types.ObjectId[];
    replyTo: Types.ObjectId;
}

const messageSchema = new Schema<IMessage>({
    receiverId: {
        type : Schema.Types.ObjectId,
        required: true
    },
    senderId: {
        type : Schema.Types.ObjectId,
        required: true
    },
    chatId: {
        type : Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    isSeen: {
        type: Boolean,
        required: false
    },
    seenAt: {
        type: Date,
        required: false
    },
    isUpdated: {
        type: Boolean,
        required: false
    },
    deleted: {
        type: [Schema.Types.ObjectId],
        required: false, 
        default: []
    },
    replyTo: {
        type: Schema.Types.ObjectId,
        required: false
    },
});

const Message = model('Message', messageSchema);
export default Message;