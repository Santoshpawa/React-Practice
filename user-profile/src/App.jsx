import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filterUser, setFilterUser] = useState([]);

  const [loading, setLoading] = useState("Loading...");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [search, users]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      setLoading("Failed to load the data. Please Refresh the page.");
    } finally {
      setLoading("");
    }
  };
  const filterData = () => {
    if (search == "") {
      setFilterUser([...users]);
      return;
    }

    const searchData = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilterUser(searchData);
  };

  return (
    <>
      <div>
        <h2>{loading}</h2>
        {loading == "" && (
          <input
            type="text"
            placeholder="Enter user name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        )}
        {filterUser.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
