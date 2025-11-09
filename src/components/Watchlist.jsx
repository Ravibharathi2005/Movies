import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

export default function Watchlist() {
  const { watchlist, moveToWatched, removeFromWatchlist } = useContext(MovieContext);

  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">🎬 Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in watchlist.</p>
      ) : (
        <ul>
          {watchlist.map((movie) => (
            <li key={movie.id} className="flex justify-between items-center my-1">
              {movie.title}
              <div>
                <button
                  onClick={() => moveToWatched(movie.id)}
                  className="bg-green-600 text-white px-2 py-1 rounded mr-2 hover:bg-green-700"
                >
                  Watched
                </button>
                <button
                  onClick={() => removeFromWatchlist(movie.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
