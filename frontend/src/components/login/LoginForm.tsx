import React, { useEffect, useState } from "react"
import Button from "../UI/button"
import { MailInput, NameInput, PassInput } from "../UI/input"
import Label from "../UI/Label";
import { loginCredentials, registerCredentials } from "../../types/global";


type FormProps = {
    handleLogin: (data: loginCredentials) => void,
    handleRegister: (data: registerCredentials) => void,
    setOperation:  React.Dispatch<React.SetStateAction<'login'|'register'>>;
    operation: 'login'|'register'
}

const LoginForm = (props: FormProps) => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [registerData, setRegisterData] = useState<registerCredentials>({
        fullName: "",
        email: "",
        password: "",
        profilePic: ""
    });
    const [loginData, setLoginData] = useState<loginCredentials>({
        email: "",
        password: "",
    });

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name ,value} = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name ,value} = e.target;
        setRegisterData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    useEffect(()=>{
        if(props.operation == 'login'){
            setLoginData({
                email: "",
                password: "",
            });
        }else{
            setRegisterData({
                fullName: "",
                email: "",
                password: "",
                profilePic: ""
            });
        }
            
            
    }, [props.operation]);

    const hanldeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(props.operation == 'login'){
            if(loginData){
                props.handleLogin(loginData);
            }else{
                console.log('login data messing');
            }
        }else{
            if(registerData){
                props.handleRegister(registerData);
            }else{
                console.log('register data messing');
            }
        }
    }
    return (
        <form onSubmit={hanldeSubmit} className='flex flex-col '>     
                {
                    props.operation == 'register' ? 
                    <>
                        <Label text="Email" />
                        <MailInput name="email" type="email" placeholder='you@example.com' value={registerData.email} onChange={handleRegisterChange} required/>
                        <Label text="Full Name"/>
                        <NameInput name="fullName" type="text" placeholder='Jhon Doe' value={registerData.fullName} onChange={handleRegisterChange} required/>
                        <Label text="Password"/>
                        <PassInput name="password" type={showPass ? 'text' : 'password'} placeholder='.....' setshowPass={setShowPass} value={registerData.password} onChange={handleRegisterChange} required/>
                        <Button type="submit" text='Create Account'/>
                        <p className="text-center">Don't have an account? <button className="cursor-pointer underline" onClick={()=>props.setOperation('login')}>Sign up</button></p>
                    </>
                    : 
                    <>
                        <Label text="Email"/>
                        <MailInput name="email" type="email" placeholder='you@example.com' value={loginData.email} onChange={handleLoginChange} required/>
                        <Label text="Password"/>
                        <PassInput name="password" type={showPass ? 'text' : 'password'} placeholder='.....' setshowPass={setShowPass} value={loginData.password} onChange={handleLoginChange} required/>
                        <Button type="submit" text='Log in'/>
                        <p className="text-center">Aleady have an account? <button className="cursor-pointer underline" onClick={()=>props.setOperation('register')}>Sign in</button></p>
                    </>         
                }
        </form>
    )
}

export default LoginForm