import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
      <Link to="/" className="text-2xl font-bold text-red-600">🎬Movies</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/watchlist" className="hover:text-red-500">Watchlist</Link>
        <Link to="/watched" className="hover:text-red-500">Watched</Link>
      </div>
    </nav>
  );
}