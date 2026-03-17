


export interface initialStateType <T> {
    data: T[];
    loading: boolean;
    error: boolean | string
};

export interface initialAuthStateType <T> {
    data: T | null;
    loading: boolean;
    error: boolean | string
};

export enum chatTypeEnum {
    PRIVATE = 'private',
    GROUP = 'group',
}

export interface Chat {
    _id: string;
    startedBy: string;
    members: string[];
    chatType: chatTypeEnum;
    groupId?: string;
    deleted?: string;
}

export interface Message {
    _id: string;
    receiverId: string;
    senderId: string;
    chatId: string;
    type: string;
    content: string;
    isSeen: boolean;
    seenAt: Date;
    isUpdated: boolean;
    deleted: string[];
    replyTo: string;
}

export interface User {
    _id: string;
    fullName: string;
    email: string;
    profilePic?:string;
}

export interface Group {
    _id: string;
    groupName: string;
    members: string[];
    createdBy: string;
    admins: string[];
    deleted: string[];
    deleteForAll: boolean;
}

export interface Auth {
    token: string,
    isAuthenticated: boolean,
    user: User
}

export interface chatReturnType extends Chat {
    receiver?: User,
}

export interface ApiReturnType <T> {
  statusCode: number;
  data?: T;
  message: string;
  success?: boolean;
}

export interface registerCredentials {
    fullName: string; 
    email: string;
    password: string; 
    profilePic: string;
}

export interface loginCredentials {
    email: string;
    password: string; 
}

export interface Notification {
    _id: string;
}

