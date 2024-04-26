//Signup.tsx
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import DefaultLayout from "../layout/DefaultLayout"
export default function Signup(){
    const[name,setName]=useState("");
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const auth = useAuth();
    if(auth.isAuthenticated){
        return <Navigate to="/" />
    }
    return(
        <DefaultLayout>
            <form className="form">
                <h1>SignUp</h1>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>SignUp</button>
            </form>
        </DefaultLayout>  
    );
}