import { NextFunction, Request, Response } from "express";
import ApiError from "../utils/apiError";
import jwt from "jsonwebtoken";
import { ACCESS_SECRET } from "../utils/env";
import { currentUser } from "../types/express";



const verifyJwt = async (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;
    const stwth = auth.startsWith('Bearer ');
    if(!auth || !stwth) {
        throw new ApiError(402, 'no auth headers');
    }
    const token = auth.split[' '][1];
    if(!token){
        throw new ApiError(402, 'no access token');
    } 

    const decode = jwt.verify(
        token,
        ACCESS_SECRET
    ) as currentUser;
    if(!decode){
        throw new ApiError(402, 'You are not authorized');
    }
    req.currUser = decode;
    next();
}

export default verifyJwt;