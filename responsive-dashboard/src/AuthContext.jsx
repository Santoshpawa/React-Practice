import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isLoggedIn, setLog] = useState(false);

  const toggleAuth = () => {
    setLog((prev) => (prev === false ? true : false));
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
