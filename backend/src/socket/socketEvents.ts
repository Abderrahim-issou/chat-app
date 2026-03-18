import { IMessage } from "../models/message";
import { createMessage } from "../services/messages";
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
    socket.on('send-Msg', async (msg: IMessage) => {
        // save the message to the db 
        const message = await createMessage(msg, msg.senderId.toString());

        //emit the message to the receiver
        Io.to(`user:${msg.receiverId}`).emit('receive-msg');
    });


    //typing effect
    socket.on('typing', (user) => {
        socket.to(`user:${user.id}`).to('is-typing');
    });

    socket.on('notification', (not) => {
        socket.to(`user:${user.id}`).to('receive-notification');
    });
    
    socket.on('join-chat', (not) => {
        socket.to(`user:${user.id}`).to('receive-notification');
    });

    socket.on('disconnect', () => {
        console.log('User disconnected :', socket.id);
    });

});
