import React from "react";
import useFormInput from "./useFormInput";
import "./App.css";

function LoginForm() {
  const username = useFormInput("");
  const password = useFormInput("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Username: ${username.value}\nPassword: ${password.value}`);
    username.reset();
    password.reset();
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <h2>Login</h2>
      <input {...username} placeholder="Username" />
      <input {...password} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

function SignupForm() {
  const email = useFormInput("");
  const password = useFormInput("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signed up with: ${email.value}`);
    email.reset();
    password.reset();
  };

  return (
    <form onSubmit={handleSignup} className="form">
      <h2>Signup</h2>
      <input {...email} placeholder="Email" />
      <input {...password} type="password" placeholder="Password" />
      <button type="submit">Signup</button>
    </form>
  );
}

function App() {
  return (
    <div className="container">
      <h1>🔧 Custom Hook Demo</h1>
      <LoginForm />
      <SignupForm />
    </div>
  );
}

export default App;
