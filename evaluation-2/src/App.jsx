import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseDetail from "./CourseDetail";
import "./App.css";

const courses = [
  {
    id: 1,
    title: "DSA",
    coding: ["Python", "SQL"],
    description: "This course is for DSA",
  },
  {
    id: 2,
    title: "Web Development",
    coding: ["MERN"],
    description: "This course is for web development",
  },
  {
    id: 3,
    title: "BackEnd",
    coding: ["Java", "SpringBoot"],
    description: "This course is for backend development",
  },
  {
    id: 4,
    title: "Testing",
    coding: ["Selenium"],
    description: "This course is for software testing",
  },
];

function CourseList() {
  const [page, setPage] = useState(1);
  const coursesPerPage = 2;

  const startIdx = (page - 1) * coursesPerPage;
  const endIdx = startIdx + coursesPerPage;
  const displayedCourses = courses.slice(startIdx, endIdx);

  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Courses Offered</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {displayedCourses.map((course) => (
          <Link
            key={course.id}
            to={`/course/${course.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              border: "2px solid black",
              margin: "30px",
              padding: "20px",
              width: "200px",
            }}
          >
            <h2>{course.title}</h2>
            <h4>{course.coding.join(", ")}</h4>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        {Array.from({ length: totalPages }, (_, idx) => (
          <button key={idx} onClick={() => setPage(idx + 1)}>
            {idx + 1}
          </button>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route
          path="/course/:id"
          element={<CourseDetail courses={courses} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
