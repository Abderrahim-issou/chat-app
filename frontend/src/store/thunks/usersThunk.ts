import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../types/global";
import { fetchUsers } from "../../api/api";



const userThunk = createAsyncThunk<User[], void , { rejectValue: string }
>("fetch/users", async (_ , thunkApi) => {
    try {
        const response = await fetchUsers();
        if (!response.data) {
          return thunkApi.rejectWithValue("invalid server response");
        }
        return response.data;
    } catch (error: any) {
        return thunkApi.rejectWithValue(
             error.response?.data?.message || 'users fetching failed'
        );
    }
});

export default userThunk;