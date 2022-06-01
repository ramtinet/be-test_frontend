import React, {useEffect, useState} from 'react';
import './App.css';
import {useSocketIO} from "./hooks/useSocketIO";
import {Socket} from "socket.io-client";

const App = () => {

  const socket : Socket | null = useSocketIO().socket;

  const test = () => {
    console.log("test");
    socket?.emit('JOIN', {}, (err : any)=>{
      console.error(err.error);
    });
  }

  return (
    <div className="app">
      <button onClick={test}>CLICK</button>
    </div>
  );
}

export default App;
