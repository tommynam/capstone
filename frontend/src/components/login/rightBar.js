import React from 'react'
import TextForm from "../forms/textForm";

export const RightBar = () => {
    return (
        <div>   
            <h1>Continue With</h1>
            <button>Google</button>
            <button>Facebook</button>
            <p>Or sign up with email</p>
            <br />
            <h1>Create Account</h1>
            <TextForm />
            <TextForm />
        </div>
    )
}
