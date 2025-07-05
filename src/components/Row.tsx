'use client';

import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Movie } from '@/constants/api';
import MovieCard from './MovieCard';

interface RowProps {
  title: string;
  movies: Movie[];
  onMovieClick?: (movie: Movie) => void;
  onPlay?: (movie: Movie) => void;
}

const Row = ({ title, movies, onMovieClick, onPlay }: RowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = (direction: string) => {
    setIsScrolled(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-1 md:space-y-2 px-[4%] relative">
      {/* Title */}
      <h2 className="text-[#e5e5e5] text-[1.4vw] min-text-[20px] font-bold cursor-pointer hover:text-white transition duration-300">
        {title}
      </h2>
      
      {/* Slider Container */}
      <div className="group relative">
        {/* Left Navigation Arrow */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-[4%] bg-gradient-to-r from-[rgba(20,20,20,0.5)] to-transparent z-40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            !isScrolled ? 'hidden' : ''
          }`}
          onClick={() => handleClick('left')}
        >
          <FaChevronLeft className="text-white text-2xl hover:scale-125 transition-transform duration-200" />
        </div>

        {/* Movies Slider */}
        <div
          ref={rowRef}
          className="flex space-x-[0.5vw] overflow-x-scroll scrollbar-hide py-[3vw] px-[4%] -mx-[4%]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className="min-w-[250px] w-[250px] pr-[0.5vw] hover:h-[300px]  transform transition-transform duration-300 hover:scale-110 hover:z-50"
              style={{ 
                transformOrigin: index === 0 ? 'left center' : index === movies.length - 1 ? 'right center' : 'center center'
              }}
            >
              <MovieCard
                movie={movie}
                onClick={() => onMovieClick?.(movie)}
                onPlay={onPlay}
              />
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-[4%] bg-gradient-to-l from-[rgba(20,20,20,0.5)] to-transparent z-40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => handleClick('right')}
        >
          <FaChevronRight className="text-white text-2xl hover:scale-125 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Row;