'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Row from '@/components/Row';
import Modal from '@/components/Modal';
import VideoPlayer from '@/components/VideoPlayer';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import { useSearch } from '@/hooks/useSearch';
import { Movie } from '@/constants/api';
import {
  trendingMovies,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries
} from '@/data/mockMovies';

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const { searchQuery, searchResults, isSearching } = useSearch();

  const genres = [
    { id: 'all', name: 'All Genres' },
    { id: 'action', name: 'Action' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'horror', name: 'Horror' },
    { id: 'romance', name: 'Romance' },
    { id: 'documentary', name: 'Documentary' }
  ];

  const getMoviesByGenre = (genre: string) => {
    switch (genre) {
      case 'action': return actionMovies;
      case 'comedy': return comedyMovies;
      case 'horror': return horrorMovies;
      case 'romance': return romanceMovies;
      case 'documentary': return documentaries;
      default: return trendingMovies;
    }
  };

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
    <ProtectedRoute>
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
            {/* Hero Section */}
            <div className="py-8">
              <h1 className="text-white text-4xl font-bold mb-2">Movies</h1>
              <p className="text-gray-400 text-lg mb-6">
                Blockbusters, indie films, and everything in between
              </p>

              {/* Genre Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {genres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => setSelectedGenre(genre.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedGenre === genre.id
                        ? 'bg-white text-black'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {genre.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Movie Rows */}
            <section className="space-y-[3vw]">
              {selectedGenre === 'all' ? (
                <>
                  <Row 
                    title="Trending Movies" 
                    movies={trendingMovies} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Top Rated" 
                    movies={topRated} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Action Movies" 
                    movies={actionMovies} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Comedies" 
                    movies={comedyMovies} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Horror Movies" 
                    movies={horrorMovies} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Romance Movies" 
                    movies={romanceMovies} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Documentaries" 
                    movies={documentaries} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                </>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                  {getMoviesByGenre(selectedGenre).map((movie) => (
                    <div key={movie.id} className="transform hover:scale-105 transition-transform duration-200">
                      <div 
                        className="relative h-[300px] cursor-pointer rounded-md overflow-hidden"
                        onClick={() => handleMovieClick(movie)}
                      >
                        <img
                          src={movie.poster_path}
                          alt={movie.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-200" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
                          <p className="text-gray-300 text-xs">{Math.round(movie.vote_average * 10)}% Match</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
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
    </ProtectedRoute>
  );
}