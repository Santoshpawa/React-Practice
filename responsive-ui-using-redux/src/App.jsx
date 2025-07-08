// App.jsx
import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";
import "./App.css";

// Redux slice
const testimonialSlice = createSlice({
  name: "testimonials",
  initialState: [
    {
      id: 1,
      title: "Effortless Collaboration",
      content:
        "Working with this team has made our workflow incredibly smooth.",
      author: "James Scott",
      position: "CEO, CreativeCorp",
    },
    {
      id: 2,
      title: "Such An Easy Choice",
      content:
        "Their support and communication are outstanding. We always feel heard.",
      author: "Sara Bryant",
      position: "CTO, InnovateX",
    },
    {
      id: 3,
      title: "Unbeatable Service",
      content: "Truly a team that goes above and beyond in delivering quality.",
      author: "Leo Martinez",
      position: "Founder, TechSavvy",
    },
  ],
  reducers: {},
});

const store = configureStore({
  reducer: {
    testimonials: testimonialSlice.reducer,
  },
});

function Testimonials() {
  const testimonials = useSelector((state) => state.testimonials);

  return (
    <div className="container">
      <h2 className="heading">Our Clients Speak.</h2>
      <div className="card-grid">
        {testimonials.map((item) => (
          <div className="card" key={item.id}>
            <h3 className="title">{item.title}</h3>
            <p className="content">"{item.content}"</p>
            <div className="author">
              <img
                src={`https://i.pravatar.cc/100?img=${item.id + 30}`}
                alt={item.author}
              />
              <div>
                <p className="author-name">{item.author}</p>
                <p className="author-position">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Testimonials />
    </Provider>
  );
}
