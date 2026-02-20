import { Types } from "mongoose"


interface currentUser {
    email: string,
    id: string
};

declare global {
    namespace Express {
        interface Request {
            currUser: currentUser
        }
    }
}