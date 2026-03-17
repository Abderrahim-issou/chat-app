import { createSlice } from "@reduxjs/toolkit";
import { initialStateType, User } from "../../types/global";
import userThunk from "../thunks/usersThunk";



const initialState: initialStateType<User> = {
    data: [],
    loading: false,
    error: false
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = action.payload.user;
            state.data.push(user);
        },
        updateUser: (state, action) => {
            const userId = action.payload.userId;
            const newUser = action.payload.newUser;
            state.data.map(user => {
                if(user._id == userId){
                    user = {...user, ...newUser};
                    return user;
                }
                return user;
            })
        },
        deleteUser: (state, action) => {
            const userId = action.payload.userId;
            state.data.filter(user => user._id != userId);
        }

    },
    extraReducers: (buildder) => {
        buildder
            .addCase(userThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(userThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(userThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? action.error.message ?? 'something went wrong';
            })
    }
});

export default userSlice.reducer;
export const { updateUser, deleteUser, addUser } = userSlice.actions;