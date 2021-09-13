import React from 'react';
import { LeftBar } from "./leftBar";
import { RightBar } from "./rightBar";


const boxStyle = {
    borderRadius: 50,
    height: "80vh",
    width: "80vw",
    backgroundColor: `#66cdaa`,
    margin: "5%",
    marginLeft: "8%"
}


export default function Login() {
    return (
        <div className="container">
            <div className="loginBox" style={boxStyle}>
                <LeftBar/>
                <RightBar/>
            </div>
        </div>
    )
};
