import { ApiReturnType, Auth, loginCredentials, chatReturnType, registerCredentials, Message, User, Group, Notification } from "../types/global";
import axiosPrivate from "../utils/axiosPrivate";


/*  ==> Auth <==  */

export const login = async (credentials: loginCredentials): Promise<ApiReturnType<Auth>> => {
    const response = await axiosPrivate.post('/auth/login', credentials);
    return response.data;
};

export const register = async (credentials: registerCredentials): Promise<ApiReturnType<Auth>> => {
    const response = await axiosPrivate.post('/auth/register', credentials);
    return response.data;
}

export const logout = async (): Promise<ApiReturnType<Auth>> => {
    const response = await axiosPrivate.post('');
    return response.data;
}


/*  ==> Chats <==  */

export const fetchChats = async (): Promise<ApiReturnType<chatReturnType[]>> => {
    const response = await axiosPrivate.get('');
    return response.data;
}


/*  ==> Messages <==  */

export const fetchMessages = async (chatId: string): Promise<ApiReturnType<Message[]>> => {
    const response = await axiosPrivate.get(`${chatId}`);
    return response.data;
}


/*  ==> Users <==  */

export const fetchUsers = async (): Promise<ApiReturnType<User[]>> => {
    const response = await axiosPrivate.get('');
    return response.data;
}


/*  ==> groups <==  */

export const fetchGroups = async (): Promise<ApiReturnType<Group[]>> => {
    const response = await axiosPrivate.get('');
    return response.data;
}

/*  ==> notifications <== */
export const fetchNotifications = async (userId: string): Promise<ApiReturnType<Notification[]>> => {
    const response = await axiosPrivate.get(`${userId}`);
    return response.data;
}
