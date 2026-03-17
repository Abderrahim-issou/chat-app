import { loginThunk, registerThunk } from "../store/thunks/authThunk";
import { loginCredentials, registerCredentials } from "../types/global";
import { useAppDispatch } from "./reduxTypedHooks"




export const useLogin = () => {
    const dispatch = useAppDispatch();
    
    return async (credentials: loginCredentials) => {
        return await dispatch(loginThunk(credentials)).unwrap();
    }
}

export const useRegister = () => {
    const dispatch = useAppDispatch();

    return async (credentials: registerCredentials) => {
        return await dispatch(registerThunk(credentials)).unwrap();
    }
}