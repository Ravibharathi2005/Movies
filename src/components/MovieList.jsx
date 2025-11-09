import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

export default function MovieList() {
  const { movies } = useContext(MovieContext);

  return (
    <ul className="mt-4 list-disc list-inside">
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
