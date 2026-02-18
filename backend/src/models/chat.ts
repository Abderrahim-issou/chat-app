import { model, Schema, Types } from "mongoose";

enum chatTypeEnum {
    PRIVATE = 'private',
    GROUP = 'group',
}



interface IChat extends Document {
    startedBy: Types.ObjectId;
    messages: Types.ObjectId[];
    members: Types.ObjectId[];
    chatType: chatTypeEnum;
}

const chatSchema = new Schema<IChat>({
    startedBy: {
        type: Schema.Types.ObjectId,
        required: true
    },
    messages: {
        type: [Types.ObjectId],
        resuired: true,
        default: []
    },
    members:  {
        type: [Types.ObjectId],
        resuired: true,
        default: []
    },
    chatType: {
        type: String,
        enum: Object.values(chatTypeEnum),
        required: true
    }
});

const Chat = model('Chat', chatSchema);
export default Chat;