import { Types } from "mongoose"


interface currentUser {
    email: string,
    id: Types.ObjectId
};

declare global {
    namespace Express {
        interface Request {
            currUser: currentUser
        }
    }
}