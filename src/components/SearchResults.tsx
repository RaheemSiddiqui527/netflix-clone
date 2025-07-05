'use client';

import { Movie } from '@/constants/api';
import MovieCard from './MovieCard';

interface SearchResultsProps {
  query: string;
  results: Movie[];
  isSearching: boolean;
  onMovieClick: (movie: Movie) => void;
  onClose: () => void;
}

const SearchResults = ({ query, results, isSearching, onMovieClick, onClose }: SearchResultsProps) => {
  if (!query) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#141414] pt-[68px]">
      {/* Header */}
      <div className="px-[4%] py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white text-2xl font-bold">
            {isSearching ? 'Searching...' : `Search results for "${query}"`}
          </h1>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-xl"
          >
            ✕
          </button>
        </div>

        {isSearching ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {results.map((movie) => (
              <div key={movie.id} className="transform hover:scale-105 transition-transform duration-200">
                <MovieCard
                  movie={movie}
                  onClick={() => {
                    onMovieClick(movie);
                    onClose();
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-white text-xl mb-4">No results found</h2>
            <p className="text-gray-400">
              Try searching for something else or browse our categories
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;