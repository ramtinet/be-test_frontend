import React from "react";
import "./LogIn.css";

type LogInProps = {
    username: string;
    setUsername: (username: string) => void;
    login: () => void;
};

const LogIn: React.FC<LogInProps> = (props) => {
    const {username, setUsername, login} = props;
    return (
        <div>
            <input placeholder={"Name"} type="text" value={username} onChange={(e) => {
                setUsername(e.target.value);
            }}/>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LogIn;
