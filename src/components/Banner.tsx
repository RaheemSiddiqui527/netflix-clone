'use client';

import { useState, useEffect } from 'react';
import { FaPlay, FaInfoCircle, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { Movie } from '@/constants/api';
import { truncate, getRandomMovie } from '@/utils/helpers';
import FallbackImage from './FallbackImage';

interface BannerProps {
  movies: Movie[];
  onPlay?: (movie: Movie) => void;
  onMoreInfo?: (movie: Movie) => void;
}

const Banner = ({ movies, onPlay, onMoreInfo }: BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (movies && movies.length > 0) {
      setMovie(getRandomMovie(movies));
    }
  }, [movies]);

  if (!movie) return null;

  return (
    <header className="relative h-[56.25vw] min-h-[600px] max-h-[800px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <FallbackImage
          src={movie?.backdrop_path || ''}
          alt={movie?.title || 'Movie Banner'}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[14.7vw] bg-gradient-to-t from-[#141414] to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-[35%] left-[4%] z-10 w-[36%] min-w-[280px]">
        {/* Netflix Series Badge */}
        <div className="flex items-center mb-[1.2vw]">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
            alt="Netflix" 
            className="h-[1.5vw] min-h-[20px] mr-[0.5vw]"
          />
          <span className="text-[#e5e5e5] text-[1.4vw] min-text-[11px] font-bold tracking-[0.1em]">SERIES</span>
        </div>

        {/* Title */}
        <h1 className="text-white font-bold text-[3.5vw] min-text-[32px] leading-[1.1] mb-[1.5vw] max-w-full">
          {movie?.title || movie?.original_title}
        </h1>
        
        {/* Description */}
        <p className="text-white text-[1.4vw] min-text-[14px] leading-[1.4] mb-[1.5vw] font-normal shadow-lg">
          {truncate(movie?.overview, 200)}
        </p>
        
        {/* Buttons */}
        <div className="flex items-center space-x-[1vw]">
          <button 
            onClick={() => movie && onPlay?.(movie)}
            className="flex items-center bg-white text-black px-[2vw] py-[0.5vw] min-px-[24px] min-py-[8px] rounded-[4px] text-[1.045vw] min-text-[16px] font-bold hover:bg-[rgba(255,255,255,0.75)] transition duration-200"
          >
            <FaPlay className="mr-[0.5vw] text-[1vw] min-text-[16px]" />
            Play
          </button>
          
          <button 
            onClick={() => movie && onMoreInfo?.(movie)}
            className="flex items-center bg-[rgba(109,109,110,0.7)] text-white px-[2vw] py-[0.5vw] min-px-[24px] min-py-[8px] rounded-[4px] text-[1.045vw] min-text-[16px] font-bold hover:bg-[rgba(109,109,110,0.4)] transition duration-200"
          >
            <FaInfoCircle className="mr-[0.5vw] text-[1vw] min-text-[16px]" />
            More Info
          </button>
        </div>
      </div>

      {/* Audio Control */}
      <div className="absolute bottom-[35%] right-[4%] z-10">
        <button 
          className="flex items-center justify-center w-[2.4vw] h-[2.4vw] min-w-[42px] min-h-[42px] border-2 border-[rgba(255,255,255,0.7)] rounded-full bg-transparent hover:bg-[rgba(255,255,255,0.1)] transition duration-200"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? (
            <FaVolumeMute className="text-white text-[1vw] min-text-[16px]" />
          ) : (
            <FaVolumeUp className="text-white text-[1vw] min-text-[16px]" />
          )}
        </button>
      </div>

      {/* Maturity Rating */}
      <div className="absolute bottom-[35%] right-[8%] z-10 flex items-center">
        <div className="bg-[rgba(51,51,51,0.6)] px-[0.4vw] py-[0.1vw] min-px-[6px] min-py-[2px] mr-[0.5vw]">
          <span className="text-white text-[1vw] min-text-[11px] font-bold">18+</span>
        </div>
      </div>
    </header>
  );
};

export default Banner;