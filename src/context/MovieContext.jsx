import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const storedWatched = JSON.parse(localStorage.getItem("watched")) || [];
    setWatchlist(storedWatchlist);
    setWatched(storedWatched);
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watchlist, watched]);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((m) => m.imdbID !== id));
  };

  const addToWatched = (movie) => {
    removeFromWatchlist(movie.imdbID);
    if (!watched.find((m) => m.imdbID === movie.imdbID)) {
      setWatched([...watched, movie]);
    }
  };

  const removeFromWatched = (id) => {
    setWatched(watched.filter((m) => m.imdbID !== id));
  };

  return (
    <MovieContext.Provider
      value={{
        watchlist,
        watched,
        addToWatchlist,
        removeFromWatchlist,
        addToWatched,
        removeFromWatched,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};