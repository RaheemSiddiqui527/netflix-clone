'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Movie } from '@/constants/api';

interface WatchlistContextType {
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (movieId: number) => void;
  isInWatchlist: (movieId: number) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

interface WatchlistProviderProps {
  children: ReactNode;
}

export const WatchlistProvider = ({ children }: WatchlistProviderProps) => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  useEffect(() => {
    // Load watchlist from localStorage
    const savedWatchlist = localStorage.getItem('netflix-watchlist');
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  const addToWatchlist = (movie: Movie) => {
    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('netflix-watchlist', JSON.stringify(updatedWatchlist));
  };

  const removeFromWatchlist = (movieId: number) => {
    const updatedWatchlist = watchlist.filter(movie => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('netflix-watchlist', JSON.stringify(updatedWatchlist));
  };

  const isInWatchlist = (movieId: number) => {
    return watchlist.some(movie => movie.id === movieId);
  };

  return (
    <WatchlistContext.Provider value={{ 
      watchlist, 
      addToWatchlist, 
      removeFromWatchlist, 
      isInWatchlist 
    }}>
      {children}
    </WatchlistContext.Provider>
  );
};