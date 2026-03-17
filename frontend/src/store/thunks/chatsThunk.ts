import { createAsyncThunk } from "@reduxjs/toolkit";
import { chatReturnType } from "../../types/global";
import { fetchChats } from "../../api/api";






const chatsThunks = createAsyncThunk<chatReturnType[], void, {rejectValue: string}
>("chats/fetch", async (_, thunkApi) => {
    try {
        const response = await fetchChats();
        if(!response.data){
            return thunkApi.rejectWithValue(
                'invalid server response'
            );
        }
        return response.data;
    } catch (error: any) {
        return thunkApi.rejectWithValue(
             error.response?.data?.message || "failed to fetch the chats",
        );
    }
});


export default chatsThunks