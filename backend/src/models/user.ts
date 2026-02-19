import { Document, model, Schema } from "mongoose";



interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    profilePic?:string;
    refreshToken?: string;
    isReseting?: boolean
}

const userSchema = new Schema<IUser>({
    fullName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        required: true,
        type: String,
    },
    profilePic: {
        required: false,
        type: String,
    },
    refreshToken: {
        type: String,
        required: false
    },
    isReseting: {
        type: Boolean,
        required: false,
        default: false
    }
});

const User = model('User', userSchema);
export default User;