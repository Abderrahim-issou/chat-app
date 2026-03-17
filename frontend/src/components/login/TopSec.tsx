import { Logo } from "../../assets";


type TopSecProps = {
    operation: 'login' | 'register'
}


const TopSec= (props: TopSecProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1.5">
        <div className="p-2 rounded-sm">
        <img src={Logo} alt="" className="h-10 text-black"/>
        </div>
        <h1 className="font-bold text-lg tracking-wide">{ props.operation == 'login' ? "Sign In" : "Create Account" }</h1>
        <p className="font-light text-sm">{ props.operation == 'login' ? "Welcome back to Chit-Chat" : "Get started with your free account" }</p>
    </div>
  )
}

export default TopSec;