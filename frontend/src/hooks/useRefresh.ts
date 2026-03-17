import axios from "axios"
import { ApiReturnType } from "../types/global"


const useRefresh = () => {


    const refresh = async() => {
        const newToken: ApiReturnType<{token: string}> = await axios.post('/');
        const token = newToken.data?.token;
        if(!token){
            throw Error('token is not available');
        }

        //set credentials to the auth slice , 
        return token;
    }
    return refresh;
}

export default useRefresh;
