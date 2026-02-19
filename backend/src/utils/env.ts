import dotenv from 'dotenv';
dotenv.config();


const getEnv = (key: string,) => {
    if(key == "DB_PASSWORD"){
        return "";
    }
    const value = process.env[key];

    if (!value) {
        console.log(`Environment Variable ${key} is Missing`);
        throw new Error("envirement var is missing")
    }

    return value ;
};



export const DB_HOST = getEnv('DB_HOST');
export const ACCESS_SECRET = getEnv('ACCESS_TOKEN');
export const RESET_SECRET = getEnv('RESET_TOKEN');
export const SESSION_SECRET = getEnv('SESSION_SECRET');
export const GOOGLE_CLIENT_ID = getEnv('GOOGLE_CLIENT_ID');
export const GOOGLE_CLIENT_SECRET = getEnv('GOOGLE_CLIENT_SECRET');
export const GOOGLE_CALLBACK_URL = getEnv('GOOGLE_CALLBACK_URL');
export const REFRESH_SECRET = getEnv('REFRESH_TOKEN');
export const DB_PASSWORD = getEnv('DB_PASSWORD');
export const DB_NAME = getEnv('DB_NAME');
export const DB_CONNECTION_STRING = getEnv('DB_CONNECTION_STRING');
export const DB_PORT = parseInt(getEnv('DB_PORT'), 10);
export const PORT = parseInt(getEnv('PORT'), 10);
export const NODE_ENV = getEnv('NODE_ENV');