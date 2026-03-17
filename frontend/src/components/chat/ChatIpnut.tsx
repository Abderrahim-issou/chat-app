import { Plus, Send } from "lucide-react"





const ChatIpnut = () => {
  return (
    <div className="relative self-start w-full">
        <input type="text" name="" id="" placeholder="Type a message..." className="border rounded-xl h-16 w-full pl-17 text-black"/>
        <div className="absolute top-2 left-3 border p-2 rounded-xl">
            <Plus size={30} />
        </div>
        <div className="absolute flex space-x-2 top-2 right-3 border px-3 py-2 rounded-xl">
            <button type="submit" className="flex items-center space-x-2">
                <span>Send</span>
                <Send size={30} strokeWidth={1.5}/>
            </button>
        </div>
    </div>
  )
}

export default ChatIpnut