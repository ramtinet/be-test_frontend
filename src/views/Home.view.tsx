import React from "react";
import "./Home.css";
import {Mail} from "../mailService/mailService";

type HomeProps = {
    emails: Mail[];
    username: string;
    recipient: string;
    setRecipient: (recipient: string) => void;
    sendEmail: () => void;
    message: string;
    setMessage: (message: string) => void;
};

const Home: React.FC<HomeProps> = (props) => {
    const {emails, username, recipient, message, setRecipient, sendEmail, setMessage} = props;
    return (
        <div className={"home"}>
            <div className={"name-label"}>
                {`${username}'s Mailbox`}
            </div>
            <div className={"email-section"}>
                {emails.map((mail, idx) => (
                    <div className={"email"} key={idx} >
                        {mail.message}
                    </div>
                ))}
            </div>
            <input className={"recipient-input"} placeholder={"Recipient"} type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)}/>
            <textarea className={"message-input"} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className={"send-button"} onClick={sendEmail}>SEND</button>
        </div>
    )
}

export default Home;
