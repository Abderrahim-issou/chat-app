import { Document, model, Schema } from "mongoose";



interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    profilePic:string;
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
    }
});

const User = model('User', userSchema);
export default User;