import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNotifications } from "../../api/api";
import { Notification } from "../../types/global";




const notificationThunk = createAsyncThunk<Notification[], string, { rejectValue: string }
>("fetch/notifications", async (userId, thunkApi) => {
        try {
            const response = await fetchNotifications(userId);
            if(!response.data){
                return thunkApi.rejectWithValue("failed to fetch the notifications");
            }
            return response.data;
        } catch (error: any) {
            return thunkApi.rejectWithValue(
                error.response?.data?.message || 'messages fetching failed'
            );
        }
    }
)

export default notificationThunk;