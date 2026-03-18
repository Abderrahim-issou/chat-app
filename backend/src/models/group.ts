import { model, Schema, Types } from "mongoose";




export interface IGroup extends Document {
    groupName: string;
    members: Types.ObjectId[];
    createdBy: Types.ObjectId;
    admins: Types.ObjectId[];
    deleted: Types.ObjectId[];
    deleteForAll: boolean;
}

const groupSchema = new Schema<IGroup>({
    groupName: {
        type: String,
        required: true
    },
    deleteForAll: {
        type: Boolean,
        required: false,
        default: false
    },
    members: {
        type: [Schema.Types.ObjectId],
        required: true,
        default: []
    },
    admins: {
        type: [Schema.Types.ObjectId],
        required: true,
        default: []
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        required: true
    },
    deleted: {
        type: [Schema.Types.ObjectId],
        required: false, 
        default: []
    }
}, {timestamps: true});

const Group = model('Group', groupSchema);
export default Group;