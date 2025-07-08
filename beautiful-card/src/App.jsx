// App.jsx
import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";

// Redux slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Lindsey James",
    username: "lindsey_james",
    bio: "Actress, musician, songwriter and artist. PM for work inquiries.",
    tags: ["PHOTOGRAPHY", "MUSIC", "ART"],
    image: "https://i.pravatar.cc/150?img=47",
    following: false,
  },
  reducers: {
    toggleFollow: (state) => {
      state.following = !state.following;
    },
  },
});

const { toggleFollow } = userSlice.actions;

const store = configureStore({
  reducer: { user: userSlice.reducer },
});

// Component
function UserCard() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={user.image} alt={user.name} className="avatar" />
      <h2>{user.name}</h2>
      <p className="username">@{user.username}</p>
      <p className="bio">{user.bio}</p>
      <div className="tags">
        {user.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="actions">
        <button className="message">Message</button>
        <button
          className={`follow ${user.following ? "unfollow" : ""}`}
          onClick={() => dispatch(toggleFollow())}
        >
          {user.following ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

// App wrapper with Provider
export default function App() {
  return (
    <Provider store={store}>
      <UserCard />
    </Provider>
  );
}
