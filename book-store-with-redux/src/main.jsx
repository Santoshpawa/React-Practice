// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import App from "./App";

// Book slice
const bookSlice = createSlice({
  name: "books",
  initialState: [
    { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const idx = state.findIndex((book) => book.id === action.payload.id);
      if (idx !== -1) {
        state[idx] = action.payload;
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;

const store = configureStore({
  reducer: {
    books: bookSlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
