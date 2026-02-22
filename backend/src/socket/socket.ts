import { Server } from "socket.io"
import { Server as HttpServer } from "http"
import ApiError from "../utils/apiError";

// sockert instance
let Io: Server;

export const initSocket = (app: HttpServer) => {
    const server = new Server (app,
        {
            cors: {
                origin: ["*"],
                credentials: true,
                methods: ["GET", "POST"]
            }
        }
    );
    return server
};

export const setSocketInstance = (socketInstance: Server) => {
    Io = socketInstance;
    return Io;
}

export const getSocketInstance = () => {
    if(!Io){
        throw new ApiError(500, 'socket is not available')
    }
    return Io;
}

