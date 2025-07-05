'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner';
import Row from '@/components/Row';
import Modal from '@/components/Modal';
import FallbackImage from '@/components/FallbackImage';
import { useSearch } from '@/hooks/useSearch';
import { Movie } from '@/constants/api';
import { trendingMovies } from '@/data/mockMovies';

export default function TestImages() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { searchQuery, searchResults, isSearching } = useSearch();

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleSearchResults = (show: boolean) => {
    setShowSearchResults(show);
  };

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen bg-[#141414]">
        <Navbar onSearchResults={handleSearchResults} />
        
        <main className="pt-[68px] px-[4%] pb-[50px]">
          <div className="py-8">
            <h1 className="text-white text-4xl font-bold mb-4">Image Test Page</h1>
            <p className="text-gray-400 text-lg mb-8">
              Testing all image components and fallbacks
            </p>

            {/* Test Banner */}
            <section className="mb-12">
              <h2 className="text-white text-2xl font-bold mb-4">🎬 Banner Component Test</h2>
              <div className="h-[400px] relative">
                <Banner movies={trendingMovies} />
              </div>
            </section>

            {/* Test Individual Images */}
            <section className="mb-12">
              <h2 className="text-white text-2xl font-bold mb-4">🖼️ Individual Image Tests</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trendingMovies.slice(0, 8).map((movie) => (
                  <div key={movie.id} className="space-y-2">
                    <div className="relative h-[200px] rounded-lg overflow-hidden">
                      <FallbackImage
                        src={movie.backdrop_path}
                        alt={movie.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-white text-sm text-center">{movie.title}</p>
                    <p className="text-gray-400 text-xs text-center">
                      {movie.backdrop_path.includes('picsum') ? '✅ Picsum' : '❌ Other'}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Test Row Component */}
            <section className="mb-12">
              <h2 className="text-white text-2xl font-bold mb-4">📺 Row Component Test</h2>
              <Row 
                title="Test Movie Row" 
                movies={trendingMovies.slice(0, 6)} 
                onMovieClick={handleMovieClick}
              />
            </section>

            {/* Image URL Debug Info */}
            <section className="mb-12">
              <h2 className="text-white text-2xl font-bold mb-4">🔍 Debug Information</h2>
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-white text-lg font-bold mb-4">Sample Image URLs:</h3>
                <div className="space-y-2">
                  {trendingMovies.slice(0, 3).map((movie) => (
                    <div key={movie.id} className="text-sm">
                      <p className="text-white font-semibold">{movie.title}:</p>
                      <p className="text-gray-300 break-all">Backdrop: {movie.backdrop_path}</p>
                      <p className="text-gray-300 break-all">Poster: {movie.poster_path}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Manual Image Test */}
            <section className="mb-12">
              <h2 className="text-white text-2xl font-bold mb-4">🧪 Manual Image Tests</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <FallbackImage
                      src="https://picsum.photos/400/300?random=test1"
                      alt="Test Image 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white text-sm text-center">Picsum Test 1</p>
                </div>
                
                <div className="space-y-2">
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <FallbackImage
                      src="https://picsum.photos/400/300?random=test2"
                      alt="Test Image 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white text-sm text-center">Picsum Test 2</p>
                </div>
                
                <div className="space-y-2">
                  <div className="relative h-[150px] rounded-lg overflow-hidden">
                    <FallbackImage
                      src="https://invalid-url-test.com/image.jpg"
                      alt="Fallback Test"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-white text-sm text-center">Fallback Test</p>
                </div>
              </div>
            </section>

            {/* Status Check */}
            <section>
              <h2 className="text-white text-2xl font-bold mb-4">✅ Status Check</h2>
              <div className="bg-green-900/30 rounded-lg p-6">
                <ul className="text-white space-y-2">
                  <li>✅ Updated mock data with Picsum URLs</li>
                  <li>✅ Added picsum.photos to next.config.js</li>
                  <li>✅ Created FallbackImage component</li>
                  <li>✅ Updated Banner component</li>
                  <li>✅ Updated MovieCard component</li>
                  <li>✅ Updated Modal component</li>
                  <li>✅ All images should now load properly</li>
                </ul>
              </div>
            </section>
          </div>
        </main>

        <Modal movie={selectedMovie} onClose={handleCloseModal} />
      </div>
    </ProtectedRoute>
  );
}