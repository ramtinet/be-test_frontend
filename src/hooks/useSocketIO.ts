import {useEffect, useState} from 'react';
import {io, Socket} from "socket.io-client";


const useSocketIO = () => {
    const [socket, setSocket] = useState<Socket | null>(null)

    useEffect(() => {
        const ENDPOINT: string = (process.env.NODE_ENV === 'development') ? "http://localhost:9000" : "https://";
        const socket : Socket = io(ENDPOINT);
        socket.connect();
        setSocket(socket);
        return () => {
            socket.disconnect();
        }
    }, []);
    return { socket }
};

export {useSocketIO};
