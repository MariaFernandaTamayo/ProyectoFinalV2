//Login.tsx
import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    auth.login(username, password);
  };

  if (auth.isAuthenticated) {
    return <Navigate to="/dashboard" state={{ username }} />;
  }

  return (
    <DefaultLayout>
      <form className="form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </DefaultLayout>
  );
}