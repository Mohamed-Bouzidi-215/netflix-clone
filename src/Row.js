// == Import
import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './Row.css';

// == Composant
function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }

    fetchData();
    }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      
      <div className="row__posters">
        {movies.map(movie => (
            <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
            />
        ))}
      </div>
    </div>
  );
}

// == Export
export default Row;
