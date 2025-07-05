'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
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

export default function Browse() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const { searchQuery, searchResults, isSearching } = useSearch();

  const languages = [
    { id: 'all', name: 'All Languages' },
    { id: 'english', name: 'English' },
    { id: 'spanish', name: 'Spanish' },
    { id: 'french', name: 'French' },
    { id: 'german', name: 'German' },
    { id: 'japanese', name: 'Japanese' },
    { id: 'korean', name: 'Korean' }
  ];

  const genres = [
    { id: 'all', name: 'All Genres' },
    { id: 'action', name: 'Action & Adventure' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'drama', name: 'Drama' },
    { id: 'horror', name: 'Horror' },
    { id: 'romance', name: 'Romance' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'thriller', name: 'Thriller' },
    { id: 'scifi', name: 'Sci-Fi' }
  ];

  const getFilteredMovies = () => {
    let movies = trendingMovies;
    
    if (selectedGenre === 'action') movies = actionMovies;
    else if (selectedGenre === 'comedy') movies = comedyMovies;
    else if (selectedGenre === 'horror') movies = horrorMovies;
    else if (selectedGenre === 'romance') movies = romanceMovies;
    else if (selectedGenre === 'documentary') movies = documentaries;
    
    // Add language suffix for demo
    if (selectedLanguage !== 'all') {
      movies = movies.map(movie => ({
        ...movie,
        title: `${movie.title} (${selectedLanguage})`
      }));
    }
    
    return movies;
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
              <h1 className="text-white text-4xl font-bold mb-2">Browse by Languages</h1>
              <p className="text-gray-400 text-lg mb-8">
                Discover content from around the world
              </p>

              {/* Filters */}
              <div className="space-y-6">
                {/* Language Filter */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">🌍 Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <button
                        key={language.id}
                        onClick={() => setSelectedLanguage(language.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                          selectedLanguage === language.id
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Genre Filter */}
                <div>
                  <h3 className="text-white text-lg font-semibold mb-3">🎭 Genres</h3>
                  <div className="flex flex-wrap gap-2">
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
              </div>
            </div>

            {/* Results */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-2xl font-bold">
                  {selectedLanguage !== 'all' || selectedGenre !== 'all' 
                    ? `Filtered Results` 
                    : 'All Content'
                  }
                </h2>
                <span className="text-gray-400">
                  {getFilteredMovies().length} titles
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                {getFilteredMovies().map((movie) => (
                  <div key={movie.id} className="group cursor-pointer">
                    <div 
                      className="relative h-[300px] rounded-md overflow-hidden transform group-hover:scale-105 transition-transform duration-200"
                      onClick={() => handleMovieClick(movie)}
                    >
                      <img
                        src={movie.poster_path}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200" />
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlay(movie);
                          }}
                          className="bg-white/90 text-black p-3 rounded-full hover:bg-white transition"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z"/>
                          </svg>
                        </button>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-green-400 text-xs font-semibold">
                            {Math.round(movie.vote_average * 10)}% Match
                          </span>
                          <span className="text-gray-300 text-xs">
                            {new Date(movie.release_date).getFullYear()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular by Language Section */}
            <section className="mt-16">
              <h2 className="text-white text-2xl font-bold mb-6">🌟 Popular Worldwide</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languages.slice(1, 4).map((language) => (
                  <div key={language.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
                    <h3 className="text-white text-xl font-bold mb-4">{language.name} Content</h3>
                    <div className="space-y-3">
                      {trendingMovies.slice(0, 3).map((movie, index) => (
                        <div key={movie.id} className="flex items-center space-x-3">
                          <span className="text-red-500 font-bold text-lg">#{index + 1}</span>
                          <img
                            src={movie.poster_path}
                            alt={movie.title}
                            className="w-12 h-16 object-cover rounded"
                          />
                          <div>
                            <p className="text-white font-medium text-sm">{movie.title}</p>
                            <p className="text-gray-400 text-xs">{Math.round(movie.vote_average * 10)}% Match</p>
                          </div>
                        </div>
                      ))}
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