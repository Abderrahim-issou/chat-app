import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import ApiError from "../utils/apiError";
import { login, logout, refresh, register, resetConfirm, resetPasswod } from "../services/auth";
import { confirmDto, loginDto, registerDto, resetDto } from "../validation/userSchema";
import ApiResponse from "../utils/apiResponse";


export const loginHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: loginDto = req.body.data;
    if(!data){
        throw new ApiError(400, 'fields are required');
    }

    const { access, refresh } = await login(data); 
    res.cookie(
        'jwt',
        refresh, 
        {
            secure: true, 
            sameSite: 'none',
            maxAge: 7 * 60 * 60 * 1000 ,
            httpOnly: true
        }
    );
    res.status(201).json(
        new ApiResponse(201, {access}, 'user logged in')
    );

}); 

export const registerHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: registerDto = req.body.data;
    const { refresh, access } = await register(data);

    res.cookie(
        'jwt',
        refresh, 
        {
            secure: true, 
            sameSite: 'none',
            maxAge: 7 * 60 * 60 * 1000 ,
            httpOnly: true
        }
    );

    res.status(201).json(
        new ApiResponse(201, {access}, 'user registred')
    );
});

export const resetPasswodHnadler = asyncHandler( async (req: Request, res: Response) => {
    const data: resetDto = req.body.data;

    const user = await resetPasswod(data);

    if(!user){
        throw new ApiError(500, 'internal server error');
    }
    res.status(200).json(
        new ApiResponse(200, {}, 'check you email inbox, to reset you password')
    );
});

export const confirmResetHandler = asyncHandler( async (req: Request, res: Response) => {
    const data: confirmDto = req.body.data;
    
    const user = await resetConfirm(data);
    if(!user){
        throw new ApiError(500,'internal server error');
    }

    res.status(201).json(
        new ApiResponse(201, {}, 'password reseted')
    );
});

export const logoutHandler = asyncHandler( async (req: Request, res: Response) => {
    const token: string = req.cookies.jwt;
    if (!token || !token.startsWith('Bearer ')){
        throw new ApiError(403, 'you are not authorized');
    }
    const user_id = req.currUser.id;
    const user = await logout(user_id);
    if(!user){
        throw new ApiError(40, 'logout failed');    
    }
    res.clearCookie(
        'jwt', 
        {
            secure: true, 
            sameSite: 'none',
            maxAge: 7 * 60 * 60 * 1000 ,
            httpOnly: true
        }
    );
    res.status(200).json(
        new ApiResponse(200, {}, 'user logged out')
    );
});

export const refereshHandler = asyncHandler( async (req: Request, res: Response) => {
    const user_id = req.currUser.id;
    const cookie: string = req.cookies.jwt;
    if (!cookie || !cookie.startsWith('Bearer ')){
        throw new ApiError(403, 'you are not authorized');
    }
    const refToken = cookie.split(' ')[1];
    const token = await refresh(user_id, refToken);
    res.status(200).json(
        new ApiResponse(200, {token}, 'new access token generated')
    );
});
