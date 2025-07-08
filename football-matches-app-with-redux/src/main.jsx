// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";

// Async thunk to fetch matches
export const fetchMatches = createAsyncThunk("matches/fetch", async () => {
  const res = await fetch(
    "https://jsonmock.hackerrank.com/api/football_matches?page=1"
  );
  const data = await res.json();
  return data.data; // array of matches
});

// Slice
const matchSlice = createSlice({
  name: "matches",
  initialState: {
    loading: false,
    matches: [],
    error: null,
    filter: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMatches.fulfilled, (state, action) => {
        state.loading = false;
        state.matches = action.payload;
      })
      .addCase(fetchMatches.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      });
  },
});

export const { setFilter } = matchSlice.actions;

const store = configureStore({
  reducer: {
    matchState: matchSlice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
