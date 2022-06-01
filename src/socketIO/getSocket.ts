import {Socket} from "socket.io-client";
const getSocket = (io: any) => {
        const ENDPOINT: string = (process.env.NODE_ENV === 'development') ? "http://localhost:9000" : "https://";
        const socket : Socket = io(ENDPOINT);
        socket.connect();
        return socket;
};

export {getSocket};
