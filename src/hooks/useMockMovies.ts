'use client';

import { useState, useEffect } from 'react';
import { Movie } from '@/constants/api';

// Simple hook that returns mock data immediately
export const useMockMovies = (movies: Movie[]) => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      setData(movies);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [movies]);

  return { movies: data, loading, error: null };
};