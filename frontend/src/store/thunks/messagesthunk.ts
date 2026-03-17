import { createAsyncThunk } from "@reduxjs/toolkit";
import { Message } from "../../types/global";
import { fetchMessages } from "../../api/api";




const messageThunk = createAsyncThunk<Message[], string, { rejectValue: string }
>("fetch/messages", async (chatId , thunkApi) => {
    try {
        const response = await fetchMessages(chatId);
        if (!response.data) {
          return thunkApi.rejectWithValue("invalid server response");
        }
        return response.data;
    } catch (error: any) {
        return thunkApi.rejectWithValue(
            error.response?.data?.message || 'messages fetching failed'
        );
    }
});

export default messageThunk;