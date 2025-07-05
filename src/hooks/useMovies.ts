'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Movie } from '@/constants/api';

export const useMovies = (url: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url);
        setMovies(response.data.results || []);
      } catch (err) {
        setError('Failed to fetch movies');
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchMovies();
    }
  }, [url]);

  return { movies, loading, error };
};