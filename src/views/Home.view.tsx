import React from "react";
import "./Home.css";
import {Mail} from "../mailService/mailService";

type HomeProps = {
    emails: Mail[];
    username: string;
    recipient: string;
    setRecipient: (recipient: string) => void;
    sendEmail: () => void;
};

const Home: React.FC<HomeProps> = (props) => {
    const {emails, username, recipient, setRecipient, sendEmail} = props;
    return (
        <div>
            <div>
                {emails.map((mail, idx) => (
                    <div key={idx} >
                        {mail.message}
                    </div>
                ))}
            </div>
            <div>
                {username}
            </div>
            <input placeholder={"Recipient"} type="text" value={recipient} onChange={(e) => {
                setRecipient(e.target.value);
            }}/>
            <button onClick={sendEmail}>SEND</button>
        </div>
    )
}

export default Home;
