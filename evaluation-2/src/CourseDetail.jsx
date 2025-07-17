import { useParams, Link } from "react-router-dom";

export default function CourseDetail({ courses }) {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{course.title}</h1>
      <h4>Coding: {course.coding.join(", ")}</h4>
      <p>{course.description}</p>
      <br />
      <Link to="/">
        <button>Back to Course List</button>
      </Link>
    </div>
  );
}
