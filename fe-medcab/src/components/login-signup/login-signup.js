import React from 'react';
import Login from './login/Login';
import SignUp from "../login-signup/signup/SignUp"

import "../login-signup/login-signup.styles.scss"

const LoginSignup = () =>{
    return (
        <div className="login-signup-wrapper">
           <h1 className="title"> Welcome to your Med Cabinet! </h1>
           <div className="components">
           <Login/>
           <SignUp />
           </div>

        </div>
    )
}
export default LoginSignup;