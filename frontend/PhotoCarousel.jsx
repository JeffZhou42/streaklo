import React, { useState, useEffect, useRef } from 'react';
import './PhotoCarousel.css';

function PhotoCarousel({ photos, speed = 10000 }) { // speed in milliseconds for a full cycle
  const [displayPhotos, setDisplayPhotos] = useState([]);
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (photos.length > 0) {
      const paddedPhotos = [...photos, ...photos]; // Double the photos for seamless looping
      setDisplayPhotos(paddedPhotos);
    }
  }, [photos]);

  useEffect(() => {
    const animate = () => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset + 0.02; // Adjust this value to change speed
        return newOffset >= 100 ? 0 : newOffset;
      });
    };

    const animationId = setInterval(animate, 16); // ~60fps

    return () => clearInterval(animationId);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const preventDefaultTouchMove = (e) => {
      e.preventDefault();
    };

    carousel.addEventListener('touchmove', preventDefaultTouchMove, { passive: false });

    return () => {
      carousel.removeEventListener('touchmove', preventDefaultTouchMove);
    };
  }, []);

  if (photos.length === 0) {
    return <div className="no-photos">No photos uploaded yet</div>;
  }

  const containerStyle = {
    transform: `translateX(${-offset}%)`,
    transition: offset === 0 ? 'none' : 'transform 0.1s linear',
  };

  return (
    <div className="photo-carousel" ref={carouselRef}>
      <div className="carousel-container" style={containerStyle}>
        {displayPhotos.map((photo, index) => (
          <img 
            key={index}
            src={photo} 
            alt={`Photo ${index + 1}`} 
            className="carousel-image" 
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoCarousel;