import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserFriends, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-solid-svg-icons'

const Login = () =>{

    return(
        <div className="login">
            <div className="l-text">Login</div>
            <div class="logo"><div className="icon"><FontAwesomeIcon icon={faChalkboardTeacher} /></div><strong>ADMIN DASH</strong></div>
  
            <div class="login-container">
                
                <h4>Log in to your account</h4>
                <label for="email">Email address</label>
                <input name="email" type="email" placeholder="Email address"></input>
                <label for="email">Password</label>
                <input name="password" type="password" placeholder="Password"></input>
            <div class="login-button"><button>Log in</button></div>
            <div class="sign-up">
                <center>New to Admin Dash? <a href="">Sign up</a></center>
            </div>
            </div>
            <button className="login-button google" onClick={() => window.location = "/auth/google/"}>Google Login</button>
        </div>
    );
};



export default Login;