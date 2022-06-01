import React, {useEffect, useState} from 'react';
import './App.css';
import {getSocket} from "./socketIO/getSocket";
import {getMail, sendMail, createMail, Mail} from "./mailService/mailService";
import {io, Socket} from "socket.io-client"
import LogIn from "./views/LogIn.view";
import Home from "./views/Home.view";

const App = () => {
  const [username, setUsername] = useState<string>("");
  const [emails, setEmails] = useState<Mail[]>([]);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [recipient, setRecipient] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const socket : Socket = getSocket(io);

  useEffect(() => {
    socket.on("INCOMING_MAIL", (mail: Mail) => {
      setEmails(prev => ([...prev, mail]));
    })
  })

  const login = () => {
    socket.emit('LOGIN', {name: username});
    socket.on('LOGIN', (response) => {
      const {requestFailed} = response;
      if(!requestFailed){
        setLoggedIn(true);
        getAllMail();
      }
    })
  }
  const getAllMail = async () => {
    const response: Mail[] = await getMail(username);
    setEmails(response);
  }
  const sendEmail = async () => {
    const mail: Mail = createMail(recipient, message);
    sendMail(mail);
  }

  return (
    <div className="app">
      {(loggedIn) ?
          <Home username={username} emails={emails} recipient={recipient} message={message} setRecipient={setRecipient} sendEmail={sendEmail} setMessage={setMessage} />
          : <LogIn login={login} setUsername={setUsername} username={username}/>}
    </div>
  );
}

export default App;
