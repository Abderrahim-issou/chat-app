import jwt from "jsonwebtoken";
import { getSocketInstance } from "../socket/socket";
import ApiError from "../utils/apiError";
import { ACCESS_SECRET } from "../utils/env";
import { currentUser } from "../types/express";




const Io = getSocketInstance();

Io.use((socket, next) => {
    const token: string = socket.handshake.auth.token;
    if(!token){
        throw new ApiError(402, 'No token is provided');
    } 
    const decode = jwt.verify(token, ACCESS_SECRET) as currentUser;
    if(!decode){
        throw new ApiError(402, 'you are not authorized');
    }
    socket.data.user = decode;
    next();
});
