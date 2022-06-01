import {Socket} from "socket.io-client";
import {baseUrl} from "./../appConstants";

const getSocket = (io: any) => {
        const ENDPOINT: string = baseUrl;
        const socket : Socket = io(ENDPOINT);
        socket.connect();
        return socket;
};

export {getSocket};
