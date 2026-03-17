import { Socket, io } from 'socket.io-client';

const URL: string = 'http://localhost:5000/chat-app';
const socket: Socket = io(URL,
    {
        autoConnect: false,
        withCredentials: true
    }
);

export default socket;