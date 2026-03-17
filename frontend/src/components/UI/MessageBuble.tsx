import {Check} from 'lucide-react'

// attachments?: {
//     url: string;
//     type: AttachmentType;
//     name?: string;
//   }[];
//   isSystemMessage?: boolean;
//   messageType?: MessageType;

// interface IMessage extends Document {
//     receiverId: Types.ObjectId;
//     senderId: Types.ObjectId;
//     chatId: Types.ObjectId;
//     type: string;
//     content: string;
//     isSeen: boolean;
//     seenAt: Date;
//     isUpdated: boolean;
//     deleted: Types.ObjectId[];
//     replyTo: Types.ObjectId;
//     attachments?: {
//          url: string;
//          type: AttachmentType;
//          name?: string;
//   }[];
// }




// const MessageBuble = () => {
//   return (
//     <div className="relative flex flex-col self-start p-4 bg-Hbubble border-0 border-gray-400 z-50 w-auto max-w-[50%] h-auto space-y-2 m-20 rounded-3xl before:content-[''] after:content-[''] after:w-[25px] after:h-1/2 after:bg-Hbubble after:absolute after:right-0 after:bottom-0 after:translate-x-1/2 after:rounded-bl-[70%] before:w-[25px] before:h-1/2 before:bg-white before:absolute before:right-0 before:bottom-0 before:translate-x-[98%] before:rounded-bl-[70%] after:z-[-1] before:z-1">
//         <p className="font-inter font-normal text-white">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit
//         </p>
//         <p className="text-white flex self-end">
//             22:00 
//             <Check />
//         </p>
//     </div>
//   )
// }
const MessageBuble = () => {
  return (
    <div className="relative flex flex-col self-start p-4 bg-Hbubble border-0 border-gray-400 z-50 w-auto max-w-[50%] h-auto space-y-2 m-20 rounded-3xl rounded-tl-none ">
        <p className="font-inter font-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <p className="text-white flex self-end">
            22:00 
            <Check />
        </p>
    </div>
  )
}



export default MessageBuble