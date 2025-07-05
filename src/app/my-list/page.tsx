'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import MovieCard from '@/components/MovieCard';
import Modal from '@/components/Modal';
import VideoPlayer from '@/components/VideoPlayer';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import { useWatchlist } from '@/context/WatchlistContext';
import { useSearch } from '@/hooks/useSearch';
import { Movie } from '@/constants/api';

export default function MyList() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { watchlist } = useWatchlist();
  const { searchQuery, searchResults, isSearching } = useSearch();

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handlePlay = (movie: Movie) => {
    setPlayingMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleClosePlayer = () => {
    setPlayingMovie(null);
  };

  const handleSearchResults = (show: boolean) => {
    setShowSearchResults(show);
  };

  return (
    <div className="relative min-h-screen bg-[#141414]">
      <Navbar onSearchResults={handleSearchResults} />
      
      {showSearchResults ? (
        <SearchResults
          query={searchQuery}
          results={searchResults}
          isSearching={isSearching}
          onMovieClick={handleMovieClick}
          onClose={() => setShowSearchResults(false)}
        />
      ) : (
        <main className="pt-[68px] px-[4%] pb-[50px]">
          <div className="py-8">
            <h1 className="text-white text-3xl font-bold mb-8">My List</h1>
            
            {watchlist.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {watchlist.map((movie) => (
                  <div key={movie.id} className="transform hover:scale-105 transition-transform duration-200">
                    <MovieCard
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                      onPlay={handlePlay}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-white text-2xl mb-4">Your list is empty</h2>
                <p className="text-gray-400 mb-8">
                  Add movies and shows to your list by clicking the + icon
                </p>
                <button 
                  onClick={() => window.location.href = '/'}
                  className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition"
                >
                  Browse Movies
                </button>
              </div>
            )}
          </div>
        </main>
      )}

      <Footer />
      <Modal movie={selectedMovie} onClose={handleCloseModal} />
      <VideoPlayer 
        isOpen={!!playingMovie} 
        onClose={handleClosePlayer} 
        title={playingMovie?.title || ''} 
      />
    </div>
  );
}