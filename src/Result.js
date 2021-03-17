import React, { useState, useEffect } from "react";
import "./Result.css";
import axios from "./axios";
import VideoCart from "./VideoCart";
import request from "./request";
import FlipMove from "react-flip-move";
function Result({ selectedaaoption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function feachMovies() {
      const result = await axios.get(selectedaaoption);

      setMovies(result.data.results);
      return request;
    }
    feachMovies();
  }, [selectedaaoption]);
  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCart key={movie.id} movie={movie}>
            {" "}
          </VideoCart>
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
