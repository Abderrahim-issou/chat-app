import { Bell, Folder, Home, Info, LogOut, Settings, SidebarClose, SidebarOpen, User2 } from "lucide-react"
import { useEffect, useState } from "react";
import { LogoWhite } from "../../assets";



const Nav = () => {
    const [sideBar, setSideBar] = useState<Boolean>(true);
    const [hide, setHide] = useState<Boolean>(false);

    const handleSideBar = () => {
        setSideBar( prev => !prev)
    }

    useEffect(()=> {
        if(!sideBar){
            setTimeout(() => {
                setHide(true)
            }, 150);
        }else{
            setHide(false);
        }
    }, [sideBar])
 return (
    <aside className={`relative flex flex-col justify-between transition-all duration-300 px-5 py-3`}>
        
        <div className={`flex flex-col space-y-6 `}>
            <div className="flex space-x-3">
                <Home />
                {/* <p>Home</p> */}
            </div>
            <div className="flex space-x-3">
                <Bell />
                {/* <p>Notifications</p> */}
            </div>
            <div className="flex space-x-3">
                <Folder />
                {/* <p>Files</p> */}
            </div>
            <hr className="text-gray-300" />
            <div className="flex space-x-3">
                <User2 />
                {/* <p>Profile</p> */}
            </div>
        </div>
        <div className={`flex flex-col space-y-6`}>
            <div className="flex space-x-3">
                <Settings />
                {/* <p>Settings</p> */}
            </div>
            <div className="flex space-x-3">
                <Info />
                {/* <p>Info</p> */}
            </div>
            <hr className="text-gray-300"/>
            <div className="flex space-x-3">
                <LogOut /> 
                {/* <p>Log out</p> */}
            </div>
        </div>
    </aside>
  )
}

export default Nav