// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: [],
  reducers: {
    addFeedback: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFeedback } = feedbackSlice.actions;

const store = configureStore({
  reducer: {
    feedback: feedbackSlice.reducer,
  },
});

export default store;
