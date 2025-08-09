'use client';
import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Row from '@/components/Row';
import Modal from '@/components/Modal';
import VideoPlayer from '@/components/VideoPlayer';
import SearchResults from '@/components/SearchResults';
import Footer from '@/components/Footer';
import { useSearch } from '@/hooks/useSearch';
import { Movie } from '@/constants/api';
import {
  trendingMovies,
  netflixOriginals,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries
} from '@/data/mockMovies';

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
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
          <main className="relative">
            <Banner 
              movies={netflixOriginals} 
              onPlay={handlePlay}
              onMoreInfo={handleMovieClick}
            />
            
            {/* Movie Rows */}
            <section className="relative -mt-[150px] z-20 space-y-[3vw] pb-[50px]">
              <Row 
                title="Trending Now" 
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
                title="Action Thrillers" 
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
                title="Scary Movies" 
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