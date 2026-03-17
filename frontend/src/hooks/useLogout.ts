import { logout } from "../api/api";



const useLogout = async () => {
    return async () => {
        //TODO::  clear credentials , 
        //TODO::  disconnect the socket
        return await logout();
        //TODO:: redirect to the login page
    }
}

export default useLogout;