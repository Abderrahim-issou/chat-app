import { createSlice } from "@reduxjs/toolkit";
import { Auth, initialAuthStateType } from "../../types/global";
import {loginThunk, registerThunk} from "../thunks/authThunk";





const initialState: initialAuthStateType<Auth> = {
    data: null,
    loading: false,
    error: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearCredntials: (state) => {
            state.data = null;
        },
        setCredentials: (state, action) => {
            if(state.data){
                state.data.token = action.payload.token;
            }
        }
    },
    extraReducers: (buildder) => {
        buildder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? action.error.message ?? 'something went wrong';
            })
            .addCase(registerThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? action.error.message ?? 'something went wrong';
            })
    }
});

export default authSlice.reducer;
export const {clearCredntials, setCredentials} = authSlice.actions;