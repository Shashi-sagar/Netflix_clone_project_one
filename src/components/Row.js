import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://media.themoviedb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    try {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        if (!movie.id) {
          console.error("TMDB ID not available for the selected movie");
          return;
        }

        const trailer = await movieTrailer(movie?.title || movie?.name || "", {
          tmdbId: movie.id,
          multi: false,
        });

        if (trailer) {
          const urlParams = new URLSearchParams(new URL(trailer).search);
          setTrailerUrl(urlParams.get("v"));
        } else {
          console.error("Trailer not found");
          // Display a user-friendly message if no trailer is found
          alert("Trailer not available for this movie.");
        }
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
      // Handle errors gracefully, e.g., display an error message to the user
      alert("Error fetching trailer. Please try again later.");
    }
  };

  return (
    <div className="row Netflix-clone">
      <h2 className="title">{title}</h2>
      {isLoading && <p>Loading movies...</p>}
      {error && <p>Error: {error.message}</p>}
      {movies.length > 0 && (
        <div className="row-posters">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleClick(movie)}
              className="movie-container"
            >
              <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            </div>
          ))}
        </div>
      )}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
