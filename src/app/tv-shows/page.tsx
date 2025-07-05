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
  documentaries
} from '@/data/mockMovies';

export default function TVShows() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { searchQuery, searchResults, isSearching } = useSearch();

  // Filter for TV shows (for demo, we'll use existing movies but label them as TV shows)
  const tvShows = trendingMovies.map(movie => ({
    ...movie,
    title: movie.title + " (TV Series)"
  }));

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
              <h1 className="text-white text-4xl font-bold mb-2">TV Shows</h1>
              <p className="text-gray-400 text-lg mb-8">
                Binge-worthy series and captivating shows
              </p>
            </div>

            {/* TV Show Rows */}
            <section className="space-y-[3vw]">
              <Row 
                title="Popular TV Shows" 
                movies={tvShows} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="Top Rated Series" 
                movies={topRated.map(m => ({...m, title: m.title + " (Series)"}))} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="Action & Adventure" 
                movies={actionMovies.map(m => ({...m, title: m.title + " (TV)"}))} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="Comedy Series" 
                movies={comedyMovies.map(m => ({...m, title: m.title + " (Comedy)"}))} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="Crime & Thriller" 
                movies={horrorMovies.map(m => ({...m, title: m.title + " (Crime)"}))} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="Documentaries" 
                movies={documentaries.map(m => ({...m, title: m.title + " (Docu-Series)"}))} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
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