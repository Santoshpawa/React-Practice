import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;

  // Fetch data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(todos.length / todosPerPage);
  const startIdx = (currentPage - 1) * todosPerPage;
  const currentTodos = todos.slice(startIdx, startIdx + todosPerPage);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Todos - Page {currentPage}</h2>
      <ul>
        {currentTodos.map((todo) => (
          <li key={todo.id}>
            #{todo.id} - {todo.title}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, idx) => {
          const pageNum = idx + 1;
          return (
            <button
              key={pageNum}
              onClick={() => changePage(pageNum)}
              style={{
                padding: "5px 10px",
                backgroundColor:
                  currentPage === pageNum ? "#007bff" : "#f0f0f0",
                color: currentPage === pageNum ? "#fff" : "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
