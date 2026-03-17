import { createAsyncThunk } from "@reduxjs/toolkit";
import { Group } from "../../types/global";
import { fetchGroups } from "../../api/api";




const groupThunk = createAsyncThunk<Group[], void, {rejectValue: string}>(
'groups/fetch', async (_ ,thunkApi) => {
    try {
        const response = await fetchGroups();
        if(!response.data){
            return thunkApi.rejectWithValue(
                "invalid server response"
            );
        }
        return response.data;
    } catch (error: any) {
        return thunkApi.rejectWithValue(
            error?.response?.data?.message || 'failed to fetch groups'
        )
    }   
});

export default groupThunk;

