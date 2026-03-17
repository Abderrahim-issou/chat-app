import React, { createContext, useContext } from "react";
import socket from "./socket";



const SocketContext = createContext(socket);

const SocketProvider = ({children}:{ children: React.ReactNode }) => {
    return(
        <SocketContext.Provider value={socket}>
            {children }
        </SocketContext.Provider>
    )
}

export default SocketProvider;
export const useSocket = () => useContext(SocketContext);