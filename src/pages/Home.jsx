import { useState, useContext } from "react";
import axios from "axios";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const { addToWatchlist } = useContext(MovieContext);

  const searchMovies = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://www.omdbapi.com/?apikey=17da5925&s=${query}`);
    if (res.data.Search) setMovies(res.data.Search);
  };

  return (
    <div className="p-6">
      <form onSubmit={searchMovies} className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="p-2 w-1/2 rounded-l bg-gray-700 text-white outline-none"
        />
        <button type="submit" className="bg-red-600 px-4 rounded-r">Search</button>
      </form>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} addToWatchlist={addToWatchlist} />
        ))}
      </div>
    </div>
  );
}