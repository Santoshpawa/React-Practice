// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Step 1: Create the slice with actions and reducers
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Step 2: Export actions for use in App.jsx
export const { increment, decrement } = counterSlice.actions;

// Step 3: Create store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Step 4: Render the app with Provider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
