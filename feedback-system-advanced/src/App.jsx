// App.jsx
import React, { useState } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { addFeedback } from "./store";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import store from "./store";
import "./App.css";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function FeedbackForm() {
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (rating) {
      dispatch(
        addFeedback({ rating: Number(rating), date: new Date().toISOString() })
      );
      setRating("");
    }
  };

  return (
    <div className="form">
      <h2>Submit Feedback</h2>
      <input
        placeholder="Enter rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        type="number"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

function FeedbackChart() {
  const feedback = useSelector((state) => state.feedback);
  const ratings = feedback.map((f) => f.rating);

  const data = {
    labels: ratings.map((_, i) => `#${i + 1}`),
    datasets: [
      {
        label: "Ratings",
        data: ratings,
        backgroundColor: "teal",
      },
    ],
  };

  return (
    <div className="chart">
      <h2>Feedback Ratings Chart</h2>
      <Bar data={data} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Feedback Dashboard</h1>
        <FeedbackForm />
        <FeedbackChart />
      </div>
    </Provider>
  );
}

export default App;
