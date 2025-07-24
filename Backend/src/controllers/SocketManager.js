import {Server} from "socket.io";  // Importing socket.io server

export const connectToSocket = (server) => {
    const io= new Server(server);

    return io;  // Return the Socket.IO server instance
};

