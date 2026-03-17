import { createSlice } from "@reduxjs/toolkit";
import { chatReturnType, initialStateType } from "../../types/global";
import chatsThunks from "../thunks/chatsThunk";



const initialState: initialStateType<chatReturnType> =  {
    data: [],
    loading: false,
    error: false
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers:  {
        addChat: (state, action) => {
            const newChat = action.payload.newChat;
            state.data.push(newChat);
        },
        updateChat: (state, action) => {
            const chatId = action.payload.chatId;
            const newChat = action.payload.newChat;
            state.data = state.data.map(chat => {
                if(chat._id == chatId){
                    chat = {...chat, ...newChat};
                    return chat;
                }
                return chat;
            })
        },
        deleteChat: (state, action) => {
            const chatId = action.payload.chatId;
            state.data = state.data.filter(chat => chat._id != chatId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(chatsThunks.pending, (state) => {
                state.loading = true
            })
            .addCase(chatsThunks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(chatsThunks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? action.error.message ?? 'something went wrong';
            })
    }
});


export default chatSlice.reducer;
export const {addChat, deleteChat, updateChat} = chatSlice.actions;

