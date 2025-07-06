import React, { useReducer } from "react";

const initialState = {
  college_name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  },
  courses_offered: [],
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      if (action.payload.key in state) {
        return { ...state, [action.payload.key]: action.payload.value };
      } else if (action.payload.key in state.address) {
        return {
          ...state,
          address: {
            ...state.address,
            [action.payload.key]: action.payload.value,
          },
        };
      } else {
        return { ...state, error: `Invalid field: ${action.payload.key}` };
      }

    case "UPDATE_COURSES":
      return { ...state, courses_offered: action.payload };

    case "RESET":
      return initialState;

    default:
      return { ...state, error: "Invalid action type!" };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", payload: { key: name, value } });
  };

  const handleCoursesChange = (e) => {
    const value = e.target.value.split(",").map((course) => course.trim());
    dispatch({ type: "UPDATE_COURSES", payload: value });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", state);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Add College</h2>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="college_name"
          value={state.college_name}
          onChange={handleChange}
          placeholder="College Name"
        />
        <br />
        <input
          name="establishment_year"
          value={state.establishment_year}
          onChange={handleChange}
          placeholder="Establishment Year"
        />
        <br />
        <input
          name="building"
          value={state.address.building}
          onChange={handleChange}
          placeholder="Building"
        />
        <br />
        <input
          name="street"
          value={state.address.street}
          onChange={handleChange}
          placeholder="Street"
        />
        <br />
        <input
          name="city"
          value={state.address.city}
          onChange={handleChange}
          placeholder="City"
        />
        <br />
        <input
          name="state"
          value={state.address.state}
          onChange={handleChange}
          placeholder="State"
        />
        <br />
        <input
          name="pincode"
          value={state.address.pincode}
          onChange={handleChange}
          placeholder="Pincode"
        />
        <br />
        <input
          name="landmark"
          value={state.address.landmark}
          onChange={handleChange}
          placeholder="Landmark"
        />
        <br />
        <input
          name="courses"
          onChange={handleCoursesChange}
          placeholder="Courses (comma separated)"
        />
        <br />
        <br />

        <button type="submit">Submit</button>
        <button
          type="button"
          onClick={handleReset}
          style={{ marginLeft: "1rem" }}
        >
          Reset
        </button>
      </form>

      <h3>Submitted Data</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
