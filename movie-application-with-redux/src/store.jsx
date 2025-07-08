import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const API_KEY = "37a37e7d"; // OMDb API key

export const fetchMovies = createAsyncThunk(
  "movies/fetch",
  async (query = "batman") => {
    const res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
    );
    const data = await res.json();
    if (data.Response === "False") {
      throw new Error(data.Error || "No movies found.");
    }
    return data.Search || [];
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
  },
});
