import React from 'react'
import TextForm from "../forms/textForm";
import FaceBook from "../facebook";
import Google from "../google";

export const RightBar = () => {
    return (
        <div>   
            <h1>Continue With</h1>
            <Google />
            <FaceBook />
            <p>Or sign up with email</p>
            <br />
            <h1>Create Account</h1>
        </div>
    )
}
