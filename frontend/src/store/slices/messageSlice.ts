import { createSlice } from "@reduxjs/toolkit"
import { Message } from "../../types/global";
import messageThunk from "../thunks/messagesthunk";

// solution to avoid haviing global error and loading for all the chats messages and lose data of each chat
interface MessagesState {
  byChatId: {
    [chatId: string]: {
      messages: Message[];
      loading: boolean;
      error: string | boolean;
    //   hasMore: boolean;
    //   cursor: string | null;
    };
  };
}

const initialState: MessagesState = {
    byChatId: {}
}


const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        updateMsg: (state, action) => {
            const chatId = action.payload.chatId;
            const messageId = action.payload.messageId;
            const newMsg = action.payload.newMsg;
            state.byChatId[chatId].messages.map(msg => {
                if(msg._id == messageId) {
                    msg.content = newMsg;
                    return msg;
                }
                return msg;
            })
        },
        deleteMsg: (state, action) => {
            const chatId = action.payload.chatId;
            const messageId = action.payload.messageId;
            state.byChatId[chatId].messages = state.byChatId[chatId].messages.filter(msg => msg._id != messageId);
        },
        addMsg: (state, action) => {
            const msg = action.payload.message;
            const chatId = action.payload.chatId;
            state.byChatId[chatId].messages.push(msg);
        }
    },
    extraReducers: (buildder) => {
            buildder
                .addCase(messageThunk.pending, (state, action) => {
                    const chatId: string = action.meta.arg;
                    state.byChatId[chatId].loading = true;
                })
                .addCase(messageThunk.fulfilled, (state, action) => {
                    const chatId: string = action.meta.arg;
                    state.byChatId[chatId].loading = false;
                    state.byChatId[chatId].messages = action.payload;
                })
                .addCase(messageThunk.rejected, (state, action) => {
                    const chatId: string = action.meta.arg;
                    state.byChatId[chatId].loading = false;
                    state.byChatId[chatId].error = action.payload ?? action.error.message ?? 'something went wrong';
                })
    }
});

export default messageSlice.reducer;
export const { deleteMsg, addMsg, updateMsg } = messageSlice.actions;