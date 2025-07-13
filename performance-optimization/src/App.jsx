import React, { useState, useEffect, useCallback } from "react";
import { Post } from "./Posts";

function App() {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Timer that increments every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Add post handler
  const addPost = () => {
    if (title.trim() && body.trim()) {
      setPosts((prev) => [
        ...prev,
        {
          id: Date.now(),
          title,
          body,
          verified: false,
        },
      ]);
      setTitle("");
      setBody("");
    }
  };

  // Toggle verified using useCallback to prevent unnecessary re-renders
  const toggleVerified = useCallback((id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, verified: !post.verified } : post
      )
    );
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Timer: {timer}</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <button onClick={addPost}>Add Post</button>

      <hr />
      <h3>Posts</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post} onToggle={toggleVerified} />
      ))}
    </div>
  );
}

export default App;
