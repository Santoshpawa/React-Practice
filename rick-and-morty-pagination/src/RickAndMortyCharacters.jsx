import { use, useEffect, useRef, useState } from "react";

export default function RickAndMortyCharacters() {
  const [characters, setCharacters] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const currentPage = useRef(1);
  const itemsPerPage = 10;

  // Fetching all the characters details at once
  useEffect(() => {
    const fetchData = async () => {
      let allCharacters = [];
      let page = 1;
      let hasMore = true;
      while (hasMore) {
        let response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        let data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        ++page;
        hasMore = data.info.next || false;
      }
      setCharacters(allCharacters);
    };
    fetchData();
  }, []);

  // for displaying character
  useEffect(() => {
    handlePageItems(1);
  }, [characters]);

  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const handlePageItems = (page) => {
    currentPage.current = page;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayed(characters.slice(start, end));
  };
  return (
    <>
      <h2>Rick And Morty Characters</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          gap: "1rem",
          padding: "20px",
        }}
      >
        {displayed.map((item) => (
          <div>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            onClick={() => handlePageItems(pageNum)}
            style={{
              backgroundColor:
                pageNum === currentPage.current ? "green" : "white",
              color: pageNum === currentPage.current ? "white" : "black",
              border: "none",
              borderRadius: "4px",
            }}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </>
  );
}
