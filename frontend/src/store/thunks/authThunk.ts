import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Auth,
  loginCredentials,
  registerCredentials,
} from "../../types/global";
import { login, register } from "../../api/api";

export const loginThunk = createAsyncThunk<Auth, loginCredentials,{ rejectValue: string }
>("auth/login", async (credentials, thunkApi) => {
    try {
        const response = await login(credentials);
        console.log('this is the response :',response);
        if (!response.data) {
          return thunkApi.rejectWithValue("invalid server response");
        }
        return response.data;
    } catch (error: any) {
        return thunkApi.rejectWithValue(
          error.response?.data?.message || "login failed",
        );
    }
});


export const registerThunk = createAsyncThunk<Auth, registerCredentials, { rejectValue: string }
>("auth/register", async (credentials, thunkApi) => {
    try {
        const response = await register(credentials);

        if (!response.data) {
          return thunkApi.rejectWithValue("invalid server response");

        }
        return response.data;
    } catch (error: any) {
        return thunkApi.rejectWithValue(
             error.response?.data?.message || 'register failed'

        );
    }
});
