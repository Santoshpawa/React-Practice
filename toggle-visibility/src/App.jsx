import React, { useReducer } from "react";

// Initial state
const initialState = { visible: false };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { visible: !state.visible };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        Toggle Message
      </button>
      {state.visible && <h2>Hello, World!</h2>}
    </div>
  );
}
