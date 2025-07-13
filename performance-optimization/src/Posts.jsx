import React, { useMemo } from "react";

// Generate random color
const getRandomColor = () => {
  const colors = ["#ffd700", "#7fffd4", "#ffb6c1", "#add8e6", "#d3ffce"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Post = React.memo(function Post({ post, onToggle }) {
  // Memoize background color so it doesn't change on every re-render
  const backgroundColor = useMemo(() => getRandomColor(), []);

  console.log("Rendering post:", post.id);

  return (
    <div
      style={{
        background: backgroundColor,
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
      }}
    >
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <p>Status: {post.verified ? "Verified" : "Unverified"}</p>
      <button onClick={() => onToggle(post.id)}>Toggle Verified</button>
    </div>
  );
});
