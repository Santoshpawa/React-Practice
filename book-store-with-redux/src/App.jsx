// App.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook, updateBook } from "./main";

export default function App() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    id: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      dispatch(updateBook(form));
    } else {
      dispatch(addBook(form));
    }
    setForm({ title: "", author: "", genre: "", id: null });
  };

  const handleEdit = (book) => setForm(book);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>📚 Book Store</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
        />
        <input
          placeholder="Genre"
          value={form.genre}
          onChange={(e) => setForm({ ...form, genre: e.target.value })}
          required
        />
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          {form.id ? "Update" : "Add Book"}
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: "0.8rem" }}>
            <b>{book.title}</b> by {book.author} [{book.genre}]
            <button
              onClick={() => handleEdit(book)}
              style={{ marginLeft: "1rem" }}
            >
              ✏️
            </button>
            <button
              onClick={() => dispatch(deleteBook(book.id))}
              style={{ marginLeft: "0.5rem" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
