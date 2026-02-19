import jwt, { SignOptions } from "jsonwebtoken";
import { ACCESS_SECRET, REFRESH_SECRET } from "../utils/env";



interface generateTokensProps<T> {
    payload: T;
    expirationTime: SignOptions['expiresIn'];
    type: 'Access' | 'Refresh';
}



const generateTokens = <T extends string | object | Buffer>(options: generateTokensProps<T>) => {
    const newToken = jwt.sign(
        options.payload ,
        options.type == 'Access' ? ACCESS_SECRET : REFRESH_SECRET,
        { expiresIn: options.expirationTime }
    );
    return newToken;
}

export default generateTokens;
