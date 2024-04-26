import DefaultLayout from "../layout/DefaultLayout"
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
export default function Login(){
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to="/dashboard" />
    }
    return(
        <DefaultLayout>
            <form className="form">
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </DefaultLayout>  
    );
}