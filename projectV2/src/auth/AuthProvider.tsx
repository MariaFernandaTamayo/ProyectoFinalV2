//AuthProvider.tsx
import { useContext, createContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
  login: (username: string, password: string) => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    // Verifica si el usuario es admin y la contraseña es admin
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);