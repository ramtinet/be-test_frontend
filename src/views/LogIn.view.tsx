import React from "react";
import "./LogIn.css";

type LogInProps = {
    username: string;
    invalidUsername: boolean;
    setUsername: (username: string) => void;
    login: () => void;
};

const LogIn: React.FC<LogInProps> = (props) => {
    const {username, invalidUsername, setUsername, login} = props;
    return (
        <div className={"log-in"}>
            <div className={"log-in-label"}>Log in</div>
            <div className={"bottom-section"}>
                <input className={`name-input ${invalidUsername? "invalid-input": ""}`} placeholder={"Name"} type="text" value={username} onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
                <button className={"log-in-btn"} onClick={login}>Login</button>
            </div>

        </div>
    )
}

export default LogIn;
