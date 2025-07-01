import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function DataContext({ children }) {
  const [login, setLogin] = useState({
    status: false,
    text: "Login",
    message: "Please Login",
  });

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      {children}
    </UserContext.Provider>
  );
}
