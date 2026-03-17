import { use, useEffect, useState } from "react"
import LoginForm from "../components/login/LoginForm"
import TopSec from "../components/login/TopSec"
import { loginCredentials, registerCredentials } from "../types/global"
import { useLogin, useRegister } from "../hooks/useLogin"
import useAuth from "../hooks/useAuth"


const Auth = () => {
  const [operation, setOperation] = useState<'login' | 'register'>('login');
  const login = useLogin();
  const register = useRegister();
  const auth = useAuth();
  
  const handleLogin = async (data: loginCredentials ) => {
      await login(data);
  }
  const handleRegister = async (data: registerCredentials) => {
      await register(data);
  }
  useEffect(() => {
    if(auth){
      console.log(auth);
    }
  }, [auth]);
  return (
    <div className="flex-1 flex justify-center items-center text-white bg-[url('./assets/images/bg.jpg')] bg-center bg-cover">
        <div className="w-1/3 border border-[#6244a9] rounded-lg px-8 py-2 bg-fond/50">
            <TopSec operation={operation}/>
            <LoginForm handleLogin={handleLogin} handleRegister={handleRegister} setOperation={setOperation} operation={operation} />
        </div>
    </div>
  )
}

export default Auth