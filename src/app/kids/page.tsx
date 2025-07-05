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
  comedyMovies,
  actionMovies
} from '@/data/mockMovies';

export default function Kids() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { searchQuery, searchResults, isSearching } = useSearch();

  // Create kid-friendly content by modifying existing movies
  const kidsMovies = trendingMovies.map(movie => ({
    ...movie,
    title: movie.title + " (Kids)",
    overview: "A fun and educational adventure perfect for children and families to enjoy together."
  }));

  const kidsShows = comedyMovies.map(movie => ({
    ...movie,
    title: movie.title + " (Kids Show)",
    overview: "An entertaining series that teaches valuable lessons while keeping kids engaged."
  }));

  const educationalContent = actionMovies.map(movie => ({
    ...movie,
    title: movie.title + " (Educational)",
    overview: "Learning made fun with exciting adventures and educational content."
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
      <div className="relative min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-[#141414]">
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
            <div className="py-8 text-center">
              <h1 className="text-white text-5xl font-bold mb-4">
                🌟 Netflix Kids 🌟
              </h1>
              <p className="text-white text-xl mb-8">
                Safe, fun, and educational content for children
              </p>
              
              {/* Age Groups */}
              <div className="flex justify-center space-x-4 mb-8">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
                  👶 Little Kids (0-5)
                </button>
                <button className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-400 transition">
                  🧒 Big Kids (6-12)
                </button>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition">
                  👨‍👩‍👧‍👦 Family
                </button>
              </div>
            </div>

            {/* Content Rows */}
            <section className="space-y-[3vw]">
              <Row 
                title="🎬 Popular Kids Movies" 
                movies={kidsMovies} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="📺 Fun Kids Shows" 
                movies={kidsShows} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="🎓 Educational Content" 
                movies={educationalContent} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
              <Row 
                title="🎵 Music & Songs" 
                movies={comedyMovies.map(m => ({...m, title: m.title + " (Songs)"}))} 
                onMovieClick={handleMovieClick}
                onPlay={handlePlay}
              />
            </section>

            {/* Featured Characters Section */}
            <section className="mt-16">
              <h2 className="text-white text-3xl font-bold text-center mb-8">
                🌈 Meet Your Favorite Characters 🌈
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "🦁 Leo the Lion", color: "bg-yellow-500" },
                  { name: "🐸 Freddy Frog", color: "bg-green-500" },
                  { name: "🐻 Bella Bear", color: "bg-pink-500" },
                  { name: "🦋 Butterfly Friends", color: "bg-purple-500" }
                ].map((character, index) => (
                  <div key={index} className={`${character.color} rounded-lg p-6 text-center hover:scale-105 transition-transform cursor-pointer`}>
                    <div className="text-4xl mb-2">{character.name.split(' ')[0]}</div>
                    <h3 className="text-white font-bold">{character.name.substring(2)}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Parental Controls Info */}
            <section className="mt-16 bg-blue-900/30 rounded-lg p-8 text-center">
              <h2 className="text-white text-2xl font-bold mb-4">
                👨‍👩‍👧‍👦 Safe Viewing for Kids
              </h2>
              <p className="text-white mb-6">
                All content is carefully curated and age-appropriate. Parental controls ensure a safe viewing experience.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h3 className="text-white font-bold mb-2">Safe Content</h3>
                  <p className="text-gray-300 text-sm">All shows are reviewed for age-appropriateness</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl mb-2">⏰</div>
                  <h3 className="text-white font-bold mb-2">Time Limits</h3>
                  <p className="text-gray-300 text-sm">Set viewing time limits for healthy screen time</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl mb-2">📚</div>
                  <h3 className="text-white font-bold mb-2">Educational</h3>
                  <p className="text-gray-300 text-sm">Learning through entertainment and fun</p>
                </div>
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