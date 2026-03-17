import { Mail, User, Lock, Eye } from "lucide-react";
import React from "react";


type InputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  setshowPass?:  React.Dispatch<React.SetStateAction<boolean>>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const MailInput = (props: InputProps) => {

    return(
        <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
            <input {...props}  className="w-full pl-11 pr-3 py-3 border-none ring-1 rounded-sm ring-[#6244a9] outline-0"/>
        </div>
    )
}

export const NameInput = (props: InputProps) => {

    return(
        <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
            <input {...props}  className="w-full pl-11 pr-3 py-3 border-none ring-1 rounded-sm ring-[#6244a9] outline-0"/>
        </div>
    )
}

export const PassInput = (props: InputProps) => {
    return(
        <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
            <input {...props} className="w-full pl-11 pr-3 py-3 border-none ring-1 rounded-sm ring-[#6244a9] outline-0 tracking-wider"/>
            <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" onClick={() => props.setshowPass?.(prev => !prev)} />
        </div>
    )
}
