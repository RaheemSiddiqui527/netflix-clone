'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

const FallbackImage = ({ 
  src, 
  alt, 
  className = '', 
  fill = false, 
  width, 
  height, 
  sizes,
  priority = false 
}: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Fallback gradient background
  const fallbackStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    padding: '20px'
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Try a different fallback URL
      setImgSrc(`https://via.placeholder.com/${width || 500}x${height || 750}/667eea/ffffff?text=${encodeURIComponent(alt)}`);
    }
  };

  if (hasError && imgSrc.includes('placeholder')) {
    // If even the placeholder fails, show a styled div
    return (
      <div 
        className={className}
        style={fill ? { ...fallbackStyle, position: 'absolute', inset: 0 } : { ...fallbackStyle, width, height }}
      >
        {alt}
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes={sizes}
      priority={priority}
      onError={handleError}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default FallbackImage;