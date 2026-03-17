import { createSlice } from "@reduxjs/toolkit";
import { initialStateType, Notification } from "../../types/global";
import notificationThunk from "../thunks/notificationThunk";




const initialState: initialStateType<Notification> = {
    loading: false,
    data: [],
    error: false
};


const notificationSlice = createSlice({
    name: 'notifactions',
    initialState,
    reducers: {
        deleteNotification: (state, action) => {
            const notId = action.payload.notId;
            state.data = state.data.filter(not => not._id != notId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(notificationThunk.pending, (state)=>{
                state.loading = true;
            })
            .addCase(notificationThunk.fulfilled, (state, action)=>{
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(notificationThunk.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload ?? action.error.message ?? 'something went wrong';
            });
    }
});

export default notificationSlice.reducer;
export const { deleteNotification } = notificationSlice.actions;