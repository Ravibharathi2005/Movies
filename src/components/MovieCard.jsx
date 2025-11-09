export default function MovieCard({ movie, addToWatchlist }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3 flex justify-between items-center">
        <h3 className="font-semibold text-lg">{movie.Title}</h3>
        {addToWatchlist && (
          <button
            onClick={() => addToWatchlist(movie)}
            className="bg-red-600 px-2 py-1 rounded hover:bg-red-700"
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}