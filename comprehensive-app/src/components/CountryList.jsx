import React, { useEffect, useState, useRef } from "react";
import useDebounce from "../hooks/useDebounce";

export default function CountryList() {
  const [allCountries, setAllCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [paginate, setPaginate] = useState(true);
  const itemsPerPage = 10;
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    fetch("https://api.first.org/data/v1/countries")
      .then((res) => res.json())
      .then((data) => {
        const countries = Object.values(data.data);
        setAllCountries(countries);
      });
  }, []);

  useEffect(() => {
    const res = allCountries.filter((c) =>
      c.country.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFiltered(res);
    setCurrentPage(1);
  }, [debouncedSearch, allCountries]);

  const paginatedItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const displayed = paginate ? paginatedItems : filtered;

  return (
    <div>
      <input
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setPaginate(!paginate)}>
        Toggle to {paginate ? "Infinite Scroll" : "Pagination"}
      </button>

      <ul>
        {displayed.map((c, i) => (
          <li key={i}>{c.country}</li>
        ))}
      </ul>

      {paginate && (
        <div>
          {Array.from(
            { length: Math.ceil(filtered.length / itemsPerPage) },
            (_, i) => (
              <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
