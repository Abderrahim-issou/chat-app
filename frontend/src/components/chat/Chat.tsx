import { MoreVertical } from "lucide-react"
import { person2 } from "../../assets"
import ChatIpnut from "./ChatIpnut"


interface Messages {
    message: string, 
    received: boolean
}

const messages: Messages[] = [
  { message: "Hey, are you available?", received: true },
  { message: "Yes, what's up?", received: false },
  { message: "I wanted to ask about the project.", received: true },
  { message: "Sure, tell me.", received: false },
  { message: "Did you finish the layout part?", received: true },
  { message: "Not yet, I'm still adjusting the styles.", received: false },
  { message: "Okay, let me know if you need help.", received: true },
  { message: "Thanks, I might ask you about flexbox.", received: false },
  { message: "Flexbox can be tricky sometimes.", received: true },
  { message: "Yeah, especially with alignment.", received: false },
  { message: "Have you tested it on mobile?", received: true },
  { message: "Not yet, that's next on my list.", received: false },
  { message: "Alright, keep me posted.", received: true },
  { message: "Will do!", received: false },
  { message: "Also, don't forget the chat bubble tail.", received: true },
  { message: "I'm actually working on that now.", received: false },
  { message: "Nice, send a screenshot later.", received: true },
  { message: "Sure, once it's polished.", received: false },
  { message: "Great, talk soon.", received: true },
  { message: "See you!", received: false }
];




export const User = () => {
    return(
        <div className="self-start flex w-full justify-between items-center px-2 py-2 rounded-xl border">
            <div className="relative flex space-x-3">
                <div className="w-13 h-13 rounded-full overflow-hidden">
                    <img
                      src={person2}
                      className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl">Name</h1>
                    <p className="font-light">Online</p>
                    <span className="absolute left-10 bottom-0.5 w-4 h-4 rounded-full bg-green-400 border border-white"></span>
                </div>
            </div>
            <div className="p-2 rounded-xl bg-gray-400">
                <MoreVertical />
            </div>
        </div>
    )
}






const Chat = () => {
  return (
    <div className="flex flex-col w-3/4 p-2 m-10">
        <div>
            <User />
        </div>
        <div className="flex flex-col py-4 overflow-auto no-scrollbar">
            {
                messages.map((item, id) => {
                    return(
                        <div key={id} className={` ${item.received ? "self-start" : "self-end"} p-2 rounded-xl bg-Mbubble text-white max-w-1/2 h-auto`}>
                            {item.message}
                        </div>
                    )
                })
            }
        </div>
        <div>
            <ChatIpnut />
        </div>
    </div>
  )
}

export default Chat