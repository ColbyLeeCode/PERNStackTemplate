import React from "react";

const Login = () =>{

    const googleLogin = async e =>{
        console.log("Logging in!");
        try {
            const response = await fetch("http://localhost:5000/auth/google/",
        );

        } catch (error) {
            console.error(error.message);
        }
    };

    return(
        <div>
            Login!
            <button onClick={() => window.location = "/auth/google/"}>Google Login</button>
        </div>
    );
};



export default Login;