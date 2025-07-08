import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./store";
import Home from "./Home";

export default function App() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [query, setQuery] = useState("batman");

  useEffect(() => {
    dispatch(fetchMovies(query));
  }, [dispatch, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.elements.query.value.trim();
    if (input) setQuery(input);
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <Home movies={movies} />}
    </div>
  );
}
