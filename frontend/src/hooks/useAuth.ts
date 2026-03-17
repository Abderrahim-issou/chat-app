import { useAppSelector } from "./reduxTypedHooks"



const useAuth = () => {
    const auth = useAppSelector(state => state.auth);
    return auth;
};

export default useAuth;
