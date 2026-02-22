import { currentUser } from "../types/express";
import { getSocketInstance } from "./socket";




const Io = getSocketInstance();
const onlineUsers = new Map<string, number>();


Io.on('connection', (socket) => {
    const user: currentUser = socket.data.user;
    console.log('User connected :', socket.id);
    
    //user specific room;
    socket.join(`user:${user.id}`);

    //check if the user is already connected: 
    const count = onlineUsers.get(`user:${user.id}`) || 0;

    // add the user as an online user
    onlineUsers.set(`user:${user.id}`, count + 1);


    //send message 
    socket.on('send-Msg', (msg) => {

    });

    //receive Message 
    socket.on('receive-Msg', (msg) => {

    });

    //typing effect
    socket.on('typing', () => {
        
    });







    // handle diconenctions
    socket.on('dieconnect', (reason) => {
        console.log('disconnete :', reason);
    });





    socket.on('disconnec', () => {
        console.log('User disconnected :', socket.id);
    });

});
