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
  comedyMovies
} from '@/data/mockMovies';

export default function NewAndPopular() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [activeTab, setActiveTab] = useState('new');
  const { searchQuery, searchResults, isSearching } = useSearch();

  // Create "new" releases by modifying existing movies
  const newReleases = trendingMovies.map(movie => ({
    ...movie,
    release_date: '2024-01-15', // Recent date
    title: movie.title + " (2024)"
  }));

  const comingSoon = actionMovies.map(movie => ({
    ...movie,
    release_date: '2024-06-15', // Future date
    title: movie.title + " (Coming Soon)"
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
              <h1 className="text-white text-4xl font-bold mb-2">New & Popular</h1>
              <p className="text-gray-400 text-lg mb-6">
                Fresh content and trending titles
              </p>

              {/* Tab Navigation */}
              <div className="flex space-x-8 mb-8 border-b border-gray-700">
                <button
                  onClick={() => setActiveTab('new')}
                  className={`pb-4 text-lg font-medium transition ${
                    activeTab === 'new'
                      ? 'text-white border-b-2 border-red-600'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🆕 New Releases
                </button>
                <button
                  onClick={() => setActiveTab('popular')}
                  className={`pb-4 text-lg font-medium transition ${
                    activeTab === 'popular'
                      ? 'text-white border-b-2 border-red-600'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🔥 Popular
                </button>
                <button
                  onClick={() => setActiveTab('coming')}
                  className={`pb-4 text-lg font-medium transition ${
                    activeTab === 'coming'
                      ? 'text-white border-b-2 border-red-600'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🎬 Coming Soon
                </button>
              </div>
            </div>

            {/* Content based on active tab */}
            <section className="space-y-[3vw]">
              {activeTab === 'new' && (
                <>
                  <Row 
                    title="New This Week" 
                    movies={newReleases} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Recently Added" 
                    movies={comedyMovies.map(m => ({...m, title: m.title + " (New)"}))} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                </>
              )}

              {activeTab === 'popular' && (
                <>
                  <Row 
                    title="Trending Now" 
                    movies={trendingMovies} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Top 10 in Your Country" 
                    movies={topRated.slice(0, 10)} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Most Watched" 
                    movies={actionMovies} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                </>
              )}

              {activeTab === 'coming' && (
                <>
                  <Row 
                    title="Coming This Month" 
                    movies={comingSoon} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                  <Row 
                    title="Highly Anticipated" 
                    movies={topRated.map(m => ({...m, title: m.title + " (Soon)"}))} 
                    onMovieClick={handleMovieClick}
                    onPlay={handlePlay}
                  />
                </>
              )}
            </section>

            {/* Featured Section */}
            <section className="mt-16">
              <h2 className="text-white text-2xl font-bold mb-6">🎯 Worth the Wait</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newReleases.slice(0, 6).map((movie) => (
                  <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
                    <img
                      src={movie.backdrop_path}
                      alt={movie.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-white font-bold text-lg mb-2">{movie.title}</h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{movie.overview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 font-semibold">
                          {Math.round(movie.vote_average * 10)}% Match
                        </span>
                        <button
                          onClick={() => handlePlay(movie)}
                          className="bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition"
                        >
                          Play
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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