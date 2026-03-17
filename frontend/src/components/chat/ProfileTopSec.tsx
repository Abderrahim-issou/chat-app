import { Flag, Info, Lock, PinIcon } from "lucide-react"
import { person2 } from "../../assets"






const ProfileTopSec = () => {
  return (
    <div className="w-full self-start flex flex-col space-y-4 items-center p-2">
        <div className="w-30 h-30 rounded-full overflow-hidden">
            <img
              src={person2}
              className="w-full h-full object-cover object-center"
            />
        </div> 
        <div className="w-full flex flex-col items-center">
            <h1 className="text-xl font-semibold">Ann Schleifer</h1>
            <p className="text-xl text-gray-400">ann_schleifer22</p>
        </div>
        <div className="w-full justify-center flex space-x-5">
            <div className="p-2 rounded">
                <Flag size={30} strokeWidth={1.5}/>
            </div>
            <div className="p-2 rounded">
                <Lock size={30} strokeWidth={1.5}/>
            </div>
            <div className="p-2 rounded">
                <Info size={30} strokeWidth={1.5}/>
            </div>
            <div className="p-2 rounded">
                <PinIcon size={30} strokeWidth={1.5}/>
            </div>
        </div>
    </div>
  )
}

export default ProfileTopSec