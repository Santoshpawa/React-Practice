import { createSlice, configureStore } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "Course",
  initialState: {
    courses: [
      {
        title: "DSA",
        coding: ["Python", "SQL"],
        description: "This course is fro DSA",
      },
      {
        title: "Web_Development",
        coding: ["MERN"],
        description: "This course is fro web development",
      },
    ],
  },
  reducers: {},
});

export const store = configureStore({
  course: courseSlice.reducer,
});
