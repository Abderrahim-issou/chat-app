import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./slices/groupSlice";
import chatsReducer from "./slices/chatSlice";
import messagesReducer from "./slices/messageSlice";
import usersReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        chats: chatsReducer,
        groups: groupsReducer,
        messages: messagesReducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: true
    }),
    devTools: process.env.NODE_ENV !== "production"
});

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

