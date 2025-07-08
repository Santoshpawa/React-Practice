import React from "react";

export default function Home({ movies }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Movies</h2>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {movies.map((movie) => (
            <li key={movie.imdbID} style={{ marginBottom: "1rem" }}>
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              {movie.Poster !== "N/A" && (
                <img src={movie.Poster} alt={movie.Title} height="100" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
