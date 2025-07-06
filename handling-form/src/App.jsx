import React, { useReducer, useState } from "react";

// Initial form state
const initialState = {
  email: "",
  password: "",
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `UPDATE_${name.toUpperCase()}`, payload: value });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
    setSubmitted(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(state);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <button type="submit">Login</button>
          <button
            type="button"
            onClick={handleReset}
            style={{ marginLeft: "10px" }}
          >
            Reset
          </button>
        </div>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>Email: {submitted.email}</p>
          <p>Password: {submitted.password}</p>
        </div>
      )}
    </div>
  );
}
