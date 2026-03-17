import { currentUser } from "../types/express";
import { getSocketInstance } from "./socket";




const Io = getSocketInstance();
const onlineUsers = new Map<string, Set<string>>();


Io.on('connection', (socket) => {
    const user: currentUser = socket.data.user;
    console.log('User connected :', socket.id);
    

    //check if the user is already connected: 
    if(!onlineUsers.has(`user:${user.id}`)){
        onlineUsers.set(`user:${user.id}`,new Set());
    }
    onlineUsers.get(`user:${user.id}`).add(socket.id);

    //user specific room;
    socket.join(`user:${user.id}`);

    // add the user as an online user
    console.log("User joined:", user.id, "online sockets:", onlineUsers.get(`user:${user.id}`)?.size);




    socket.on('diconnecting', () => {
        const userId = user.id;
        if(!userId) return;

        const userSockets = onlineUsers.get(`user:${userId}`);
        if(userSockets){
            userSockets.delete(socket.id);
            if(userSockets.size == 0){
                onlineUsers.delete(`user:${userId}`);
                console.log( `user : => user:${userId} just went offline`);
                Io.emit('user-offline', userId);
            }else{
                console.log('user still online');
            }
        }
    });




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
    socket.on('diconnect', (reason) => {
        console.log('disconnete :', reason);
        const userId = socket.data.user.id
        if (!userId) return;
        const userSockets = onlineUsers.get(`user:${user.id}`);
        if(userSockets) return;
    });





    socket.on('disconnec', () => {
        console.log('User disconnected :', socket.id);
    });

});
