'use client';

import { useEffect } from 'react';
import { FaTimes, FaPlay, FaPlus, FaThumbsUp } from 'react-icons/fa';
import { Movie } from '@/constants/api';
import { getYear } from '@/utils/helpers';
import FallbackImage from './FallbackImage';

interface ModalProps {
  movie: Movie | null;
  onClose: () => void;
}

const Modal = ({ movie, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (movie) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [movie, onClose]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-md bg-zinc-900 shadow-xl">
        {/* Close button */}
        <button
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
          onClick={onClose}
        >
          <FaTimes className="h-6 w-6" />
        </button>

        {/* Movie backdrop */}
        <div className="relative h-96">
          <FallbackImage
            src={movie.backdrop_path || movie.poster_path}
            alt={movie.title}
            fill
            className="h-full w-full object-cover brightness-[60%]"
          />
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-900 to-transparent" />
          
          {/* Movie title and buttons */}
          <div className="absolute bottom-10 left-10">
            <h3 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              {movie.title}
            </h3>
            
            <div className="flex space-x-3">
              <button className="flex items-center gap-x-2 rounded bg-white px-8 py-2 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-7 w-7 text-black" />
                Play
              </button>
              
              <button className="modalButton">
                <FaPlus className="h-7 w-7" />
              </button>
              
              <button className="modalButton">
                <FaThumbsUp className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Movie details */}
        <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2 text-sm">
              <p className="font-semibold text-green-400">
                {Math.round(movie.vote_average * 10)}% Match
              </p>
              <p className="font-light">{getYear(movie.release_date)}</p>
              <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
            
            <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
              <p className="w-5/6">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;