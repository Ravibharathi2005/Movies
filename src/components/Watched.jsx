import React, { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

export default function Watched(){
  const { watched, removeFromWatched } = useContext(MovieContext)

  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">🍿 Watched</h2>
      {watched.length === 0 ? <p>No movies watched yet.</p> : (
        <ul>
        {watched.map((movie) => (
          <li key={movie.id} className="flex justify-between items-center my-1">
            {movie.title}
            <button
              onClick={() => removeFromWatched(movie.id)}
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      )}
    </div>
  )
}
