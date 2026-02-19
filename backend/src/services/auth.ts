import jwt from "jsonwebtoken";
import generateTokens from "../helpers/generateTokens";
import sendEmail from "../helpers/sendMail";
import User from "../models/user";
import ApiError from "../utils/apiError";
import { confirmDto, loginDto, registerDto, resetDto } from "../validation/userSchema";
import bcrypt from 'bcrypt';
import { ACCESS_SECRET } from "../utils/env";




export const login = async (data: loginDto) => {
    const { email, password } = data;
    if(!email || !password) {
        throw new ApiError(400, "email and password are requied");
    }

    const user = await User.findOne({ email });
    if(!user){
        throw new ApiError(404, "user not found");
    }

    const match = bcrypt.compare(password, user.password);
    if(!match){
        throw new ApiError(401, "invalid credentials");
    }

    const refresh = generateTokens({payload: {id: user._id, email: user.email}, expirationTime: '1d', type: 'Refresh'});
    const access = generateTokens({payload: {id: user._id, email: user.email}, expirationTime: '15min', type: 'Access'});

    user.refreshToken = refresh;
    user.save();

    return {
        refresh, 
        access
    }
}


export const register = async (data: registerDto) => {
    console.log(data);
    const { email, fullName, password } = data;
    if(!email || !password || !fullName ) {
        throw new ApiError(400, "email and password are requied");
    }

    const user = await User.findOne({ email });

    if (user){
        throw new ApiError(400, 'user already exists');
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        ...data,
        password: hash
    });
    
    if(!newUser){
        throw new ApiError(500, 'user not created');
    }
    
    const refresh = generateTokens({payload: {id: newUser._id, email: newUser.email}, expirationTime: '1d', type: 'Refresh'});
    const access = generateTokens({payload: {id: newUser._id, email: newUser.email}, expirationTime: '15min', type: 'Access'});

    newUser.refreshToken = refresh;
    newUser.save();
    
    return{
        access, 
        refresh
    }
}


export const resetPasswod = async (data: resetDto) => {
    const { email } = data;

    if(!email){
        throw new ApiError(400, 'email is required');
    }
    const user = await User.findOne({email});
    if(!user){
        throw new ApiError(404, "user not found");
    }

    const resetPayload = {
        id: user._id,        
    }

    const token = generateTokens({payload: resetPayload, expirationTime: '2min', type: 'Access'});

    const recoverUrl = `http://localhost:5173/resetPassword?token=${token}`;

    const sendedEmail = await sendEmail(email, recoverUrl);

    if (!sendedEmail.accepted || sendedEmail.accepted.length === 0){
        throw new ApiError(500, 'Email was not accepted by any reciptions');
    }

    user.isReseting = true;
    user.save();
    
    return user;
}

export const resetConfirm = async (data: confirmDto) => {
    const { password, token } = data;
    if(!password || !token) {
        throw new ApiError(400, 'password is reqired');
    }
    const decode = jwt.verify(token, ACCESS_SECRET) as {id: string};
    if(!decode){
        throw new ApiError(401, 'Not authorized');
    }
    const user = await User.findById(decode.id);
    if(!user){
        throw new ApiError(404, 'user not found');
    } 
    if(!user.isReseting){
        throw new ApiError(401, 'Ypu did not start this operation');
    }

    const hash = await bcrypt.hash(password, 10);
    user.password = hash;
    user.isReseting = false;
    user.save();
    return user
}