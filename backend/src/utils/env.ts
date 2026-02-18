import dotenv from 'dotenv';
dotenv.config();


const getEnv = <T>(key: string, defaultValue?: T): T => {
    const value = process.env[key];
    // console.log("value is: ", value, "key:" , key);
    

    if (value === undefined || value === null) {
        if (defaultValue === undefined) {
            console.log(`Environment Variable ${key} is Missing`);
        }
        return defaultValue;
    }

    return value as T;
};



export const DB_HOST = getEnv<string>('DB_HOST', null);
export const ACCESS_SECRET = getEnv<string>('ACCESS_TOKEN', null);
export const RESET_SECRET = getEnv<string>('RESET_TOKEN', null);
export const SESSION_SECRET = getEnv<string>('SESSION_SECRET', null);
export const GOOGLE_CLIENT_ID = getEnv<string>('GOOGLE_CLIENT_ID', null);
export const GOOGLE_CLIENT_SECRET = getEnv<string>('GOOGLE_CLIENT_SECRET', null);
export const GOOGLE_CALLBACK_URL = getEnv<string>('GOOGLE_CALLBACK_URL', null);
export const REFRESH_SECRET = getEnv<string>('REFRESH_TOKEN', null);
export const DB_USERNAME = getEnv<string>('DB_USERNAME', null);
export const DB_PASSWORD = getEnv<string>('DB_PASSWORD', null);
export const DB_NAME = getEnv<string>('DB_NAME', null);
export const DB_CONNECTION_STRING = getEnv<string>('DB_CONNECTION_STRING');
export const DB_PORT = parseInt(getEnv<string>('DB_PORT', '27017'), 10);
export const PORT = parseInt(getEnv<string>('PORT', '4004'), 10);
export const NODE_ENV = getEnv<'development' | 'production' | 'test'>('NODE_ENV', 'development');
