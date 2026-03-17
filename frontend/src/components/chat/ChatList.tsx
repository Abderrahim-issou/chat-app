import { LucideSquarePlus, MessageSquarePlus, MoreVertical, Search, SearchIcon, SearchX, SquarePlus } from "lucide-react"
import { person2 } from "../../assets"

const list: chatType[] = [
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
    {name: "name1", lastM: "this is the last me...", time: "20:00 PM", newMsg: 3},
]


type chatType = {
    name: string, lastM: string, time: string, newMsg: number
}

interface chatProps {
    chat: chatType
}
export const ChatItem = ({chat}: chatProps) => {
    return(
        <div className="flex self-start items-center justify-between px-2 py-1.5 w-80 rounded-4xl font-inter transition-all duration-100 hover:bg-gray-400">
            <div className="flex items-center space-x-3">
                
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={person2}
                      className="w-full h-full object-cover object-center"
                    />
            </div>
                <div className="">
                    <h1 className="font-semibold">{chat.name}</h1>
                    <p className="">{chat.lastM}</p>
            </div>
            </div>
            
            <div className="flex flex-col items-end">
                <p>{chat.time}</p>
                <span className="px-2 rounded-full  bg-green-500">{chat.newMsg}</span>
            </div>
        </div>
    )
}


const TopSec = () => {

    const handleNewChat = () => {

    }
    const handleMore = () => {

    }

    const handleFilter = () => {

    }
  return (
    <div className="w-80 py-4 no-scrollbar">
        <div className="flex justify-between w-full mb-6 items-center">
            <h1 className="text-2xl">Chit-Chat</h1>
            <div className="flex space-x-6">
                <MessageSquarePlus  />
                <MoreVertical />
            </div>
        </div>
        <div className="relative mb-2">
            <div className="absolute top-2.5 left-3">
                <Search size={20} strokeWidth={1}/>
            </div>
            <input type="text" name="" id="" className="border border-gray-400 w-full h-10 rounded-3xl pl-12" placeholder="Search or start a new Chat"/>
        </div>
        <ul className="flex space-x-3">
            <li className="border border-gray-400 rounded-2xl py-1 px-4">Tag</li>
            <li className="border border-gray-400 rounded-2xl py-1 px-4">Tag</li>
            <li className="border border-gray-400 rounded-2xl py-1 px-4">Tag</li>
            <li className="border border-gray-400 rounded-2xl py-1 px-4">Tag</li>
        </ul>
    </div>
  )
}



const ChatList = () => {
  return (
    <div className="self-start space-y-2 px-2 py-3">
        <div>
            <TopSec />
        </div>
        { list.map(( chat: chatType, index)=>{
            return (
                <ChatItem key={index} chat={chat}/>
            )
        })}
    </div>
  )
}

export default ChatList