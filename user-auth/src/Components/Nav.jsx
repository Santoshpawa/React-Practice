import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "../CSS/nav.css";
export default function Navbar() {
  const { login, setLogin } = useContext(UserContext);

  return (
    <button
      onClick={() => {
        {
          !login.status &&
            setLogin({
              ...login,
              status: true,
              message: "Welcome User",
              text: "Logout",
            });
        }
        {
          login.status &&
            setLogin({
              ...login,
              status: false,
              message: "Please Login ",
              text: "Login",
            });
        }
      }}
    >
      {login.text}
    </button>
  );
}
