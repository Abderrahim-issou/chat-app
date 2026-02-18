import { Schema, Types } from "mongoose";




interface IGroup extends Document {
    groupName: string;
    members: Types.ObjectId[];
    createdBy: Types.ObjectId;
}

const groupSchema = new Schema<IGroup>({
    groupName: {
        type: String,
        required: true
    },
    members: {
        type: [Schema.Types.ObjectId],
        required: true,
        default: []
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {timestamps: true});