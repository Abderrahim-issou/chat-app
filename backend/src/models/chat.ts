import { model, Schema, Types } from "mongoose";
import ApiError from "../utils/apiError";

export enum chatTypeEnum {
    PRIVATE = 'private',
    GROUP = 'group',
}



export interface IChat extends Document {
    startedBy: Types.ObjectId;
    members: Types.ObjectId[];
    chatType: chatTypeEnum;
    groupId?: Types.ObjectId;
    deleted?: Types.ObjectId[];
}

const chatSchema = new Schema<IChat>({
    startedBy: {
        type: Schema.Types.ObjectId,
        required: true
    },
    members:  {
        type: [Types.ObjectId],
        resuired: true,
        default: []
    },
    deleted:  {
        type: [Types.ObjectId],
        resuired: false,
        default: []
    },
    chatType: {
        type: String,
        enum: Object.values(chatTypeEnum),
        required: true
    },
    groupId: {
        required: false,
        type: Schema.Types.ObjectId
    }
});
chatSchema.pre('validate', function (next){

    const {groupId, chatType} = this;
    if(chatType == chatTypeEnum.GROUP && !groupId ){
        return next(
          new ApiError(422, 'ValidationError: group id is required in group chats')
        );
    }else{
        return next();
    }
});

const Chat = model('Chat', chatSchema);
export default Chat;