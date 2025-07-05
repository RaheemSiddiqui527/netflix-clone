'use client';

import { useState } from 'react';
import { FaPlay, FaPlus, FaThumbsUp, FaChevronDown, FaCheck } from 'react-icons/fa';
import { Movie } from '@/constants/api';
import { getYear } from '@/utils/helpers';
import { useWatchlist } from '@/context/WatchlistContext';
import FallbackImage from './FallbackImage';

interface MovieCardProps {
  movie: Movie;
  onClick?: () => void;
  onPlay?: (movie: Movie) => void;
}

const MovieCard = ({ movie, onClick, onPlay }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(movie.id);

  const handleWatchlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    onPlay?.(movie);
  };

  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Main Card */}
      <div className={`relative transition-all duration-300 ${
        isHovered 
          ? 'scale-125 z-50 shadow-2xl' 
          : 'scale-100'
      }`}>
        
        {/* Image Container */}
        <div className="relative w-full h-[141px] md:h-[141px] rounded-md overflow-hidden">
          <FallbackImage
            src={movie.backdrop_path || movie.poster_path}
            alt={movie.title || movie.original_title}
            fill
            className="object-cover transition-all duration-300"
            sizes="(max-width: 768px) 250px, 250px"
          />
        </div>

        {/* Hover Content */}
        {isHovered && (
          <div className="absolute top-full hover:z-50 left-0 right-0 bg-[#181818] rounded-b-md p-4 shadow-2xl border-t-0">
            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handlePlay}
                  className="flex items-center justify-center w-8 h-8 bg-white rounded-full hover:bg-gray-200 transition"
                >
                  <FaPlay className="text-black text-xs ml-0.5" />
                </button>
                <button 
                  onClick={handleWatchlistToggle}
                  className={`flex items-center justify-center w-8 h-8 border-2 rounded-full transition ${
                    inWatchlist 
                      ? 'border-white bg-white text-black' 
                      : 'border-gray-400 hover:border-white text-white'
                  }`}
                >
                  {inWatchlist ? (
                    <FaCheck className="text-xs" />
                  ) : (
                    <FaPlus className="text-xs" />
                  )}
                </button>
                <button className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition">
                  <FaThumbsUp className="text-white text-xs" />
                </button>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
                className="flex items-center justify-center w-8 h-8 border-2 border-gray-400 rounded-full hover:border-white transition"
              >
                <FaChevronDown className="text-white text-xs" />
              </button>
            </div>

            {/* Movie Info */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-green-400 font-semibold">
                  {Math.round(movie.vote_average * 10)}% Match
                </span>
                <span className="border border-gray-400 px-1 text-gray-300">
                  18+
                </span>
                <span className="text-gray-300">{getYear(movie.release_date)}</span>
                <span className="border border-gray-400 px-1 text-gray-300 text-[10px]">
                  HD
                </span>
              </div>
              
              <div className="flex items-center space-x-1 text-xs text-gray-300">
                <span>Action</span>
                <span>•</span>
                <span>Thriller</span>
                <span>•</span>
                <span>Drama</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Title (shown when not hovered) */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-b-md">
        <p className="text-xs font-semibold truncate text-white">
          {movie.title || movie.original_title}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;