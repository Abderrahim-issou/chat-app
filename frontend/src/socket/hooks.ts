import { useEffect, useState } from "react";
import { useSocket } from "../socket/SocketProvider";
import { User } from "../types/global";
import { Message } from "postcss";
import useAuth from "../hooks/useAuth";



// socket setUp  
const usesetUpSocket = () => {
    const socket = useSocket();
    const  { data } = useAuth();
    useEffect(() => {
        if(!data?.user) return ;
        //connecting the socket 
        socket.connect();
        //user joins in 
        const onConnect = () => {
            console.log('socket connected');
            socket.emit('join', {
                user: data?.user
            });
        }
        // on the user connections
        socket.on('connect', onConnect);
        // on the user disconnection;
        socket.on('disonnect', () =>{
            console.log('user disconnected');
        });
        return () =>{
            socket.off('connect', onConnect); 
            socket.disconnect();
        }
    }, [data?.user]);
}


export const useJoin = () => {
    const socket = useSocket();
    return (user: User) => {
        socket.emit('join', user);
    }
}

export const useLitenMsg = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const socket = useSocket();

    useEffect(() => {
        const handleMessages = (msg: Message) => {
            setMessages(prev => [...prev, msg]);
        }
        socket.on('receive-msg', handleMessages);
        //TODO: handle adding the msg to the messages slice
        return () => { socket.off('receive-msg', handleMessages)}
    },[]);
    return messages;
}

export const useSendMsg = () => {
    const socket = useSocket();
    return (msg: Message) => {
        socket.emit('send-message', msg);
    }
}

export const useNotification = () => {
    const socket = useSocket();
    const [Notifications, setNotifications] = useState();

    useEffect(() => {
        const handleNotifications = (not: any) => {
            setNotifications(not);
        }

        socket.on('notification', handleNotifications);

        //TODO: handle adding the notification to the notification slice

        return () => {
            socket.off('notification', handleNotifications);  
        }
    }, []);

    return Notifications;
}

export const useTypingEmiter = () => {
    const socket = useSocket();
    return (user: User) => {
        socket.emit('typing', user);
    }
}

export const useTypingListener = () => {
    const socket = useSocket();
    const [istyping, setIsTyping] = useState<boolean>(false);
    useEffect(() =>{
        const handleTyping = () => {
            setIsTyping(prev => !prev);
        }
        socket.on('isTyping', handleTyping);

        return () => { socket.off('isTyping', handleTyping) }
    });
    return istyping;
}

export default usesetUpSocket;