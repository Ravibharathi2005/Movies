import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export default function Watched() {
  const { watched, removeFromWatched } = useContext(MovieContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 font-bold">Watched Movies</h2>
      {watched.length === 0 ? (
        <p>No movies marked as watched.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {watched.map((movie) => (
            <div key={movie.imdbID} className="bg-gray-800 p-3 rounded-lg shadow-md">
              <img src={movie.Poster} alt={movie.Title} className="h-64 w-full object-cover rounded" />
              <div className="mt-2 flex justify-end">
                <button onClick={() => removeFromWatched(movie.imdbID)} className="bg-red-600 px-3 py-1 rounded">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}