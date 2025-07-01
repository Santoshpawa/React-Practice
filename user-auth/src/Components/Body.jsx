import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export default function Body() {
  const { login } = useContext(UserContext);

  return <h2>{login.message}</h2>;
}
