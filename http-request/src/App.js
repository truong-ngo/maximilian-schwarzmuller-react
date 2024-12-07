import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://upload-file-540c6-default-rtdb.firebaseio.com/movie.json");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      const transMovies = []
      for (const key in data) {
        transMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }
    
      setMovies(transMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  async function addMovieHandler(movie) {
    const data = await fetch('https://upload-file-540c6-default-rtdb.firebaseio.com/movie.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const response = await data.json()
    fetchMovieHandler();
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error !== null && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
