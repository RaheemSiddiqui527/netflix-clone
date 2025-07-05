'use client';

import { useState } from 'react';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import { useSearch } from '@/hooks/useSearch';

export default function TestNavbar() {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { searchQuery, searchResults, isSearching } = useSearch();

  const handleSearchResults = (show: boolean) => {
    setShowSearchResults(show);
  };

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen bg-[#141414]">
        <Navbar onSearchResults={handleSearchResults} />
        
        <main className="pt-[68px] px-[4%] pb-[50px]">
          <div className="py-8">
            <h1 className="text-white text-4xl font-bold mb-4">Navbar Test Page</h1>
            <p className="text-gray-400 text-lg mb-8">
              This page is for testing navbar functionality
            </p>

            {/* Test Content */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-white text-2xl font-bold mb-4">✅ Navbar Features Working:</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>🏠 Logo click → Home navigation</li>
                  <li>📱 Mobile responsive menu</li>
                  <li>🔍 Search functionality</li>
                  <li>👤 Profile dropdown with user info</li>
                  <li>🎯 Active page highlighting</li>
                  <li>📺 All navigation links functional</li>
                  <li>🎬 Kids section link</li>
                  <li>🔔 Notifications with red dot</li>
                  <li>🎁 Gift icon</li>
                  <li>🚪 Logout functionality</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-white text-2xl font-bold mb-4">🧪 Test Instructions:</h2>
                <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                  <li>Click on different navigation links to test routing</li>
                  <li>Try the search icon and type something</li>
                  <li>Click on your profile to see dropdown menu</li>
                  <li>Test mobile view by resizing browser</li>
                  <li>Scroll down to see navbar background change</li>
                  <li>Click Netflix logo to go home</li>
                  <li>Test logout from profile dropdown</li>
                </ol>
              </div>

              {showSearchResults && (
                <div className="bg-blue-900/50 rounded-lg p-6">
                  <h3 className="text-white text-xl font-bold mb-2">🔍 Search Active</h3>
                  <p className="text-gray-300">
                    Search query: "{searchQuery}"
                  </p>
                  <p className="text-gray-300">
                    Results: {searchResults.length} movies found
                  </p>
                  <button
                    onClick={() => setShowSearchResults(false)}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                  >
                    Close Search
                  </button>
                </div>
              )}

              {/* Scroll test content */}
              <div className="space-y-4">
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-white font-bold">Test Content Block {i + 1}</h3>
                    <p className="text-gray-300">
                      Scroll down to test navbar background transition. 
                      The navbar should become solid black after scrolling 100px.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}