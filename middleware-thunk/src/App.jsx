// App.jsx
import React, { useEffect, useState } from "react";
import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";

// Thunk to fetch coffee data
export const fetchCoffee = createAsyncThunk("coffee/fetchCoffee", async () => {
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  return await res.json();
});

const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffee.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCoffee.rejected, (state) => {
        state.status = "failed";
      });
  },
});

const store = configureStore({
  reducer: {
    coffee: coffeeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(), // thunk included by default
});

function CoffeeList() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.coffee);
  const [sortBy, setSortBy] = useState("title");

  useEffect(() => {
    dispatch(fetchCoffee());
  }, [dispatch]);

  const sortedItems = [...items].sort((a, b) =>
    a[sortBy]?.localeCompare(b[sortBy])
  );

  return (
    <div className="container">
      <h1>☕ Hot Coffee Menu</h1>
      <div className="controls">
        <label>Sort by: </label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="title">Title</option>
          <option value="description">Description</option>
        </select>
      </div>

      {status === "loading" && <p>Loading coffee...</p>}
      {status === "failed" && <p>Failed to load coffee data.</p>}
      {status === "succeeded" && (
        <div className="grid">
          {sortedItems.map((coffee) => (
            <div key={coffee.id} className="card">
              <h3>{coffee.title}</h3>
              <p>{coffee.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <CoffeeList />
    </Provider>
  );
}
