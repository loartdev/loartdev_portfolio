import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState, useEffect, useRef } from "react";

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      10000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const previousSlide = () => {
    resetTimeout();
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    resetTimeout();
    setCurrentIndex(
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden w-[92vw] mt-24 rounded-2xl border-[1vw] h-[66vh] mx-[4vw] border-theme-navbg">
      <div
        className="absolute h-full w-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <GatsbyImage key={index} image={image.src}
            className="object-cover h-full w-full flex-none" />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-theme-navbg text-theme-text border-none py-2 px-4 cursor-pointer font-bold text-lg uppercase"
        onClick={previousSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>

      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-theme-navbg text-theme-text border-none py-2 px-4 cursor-pointer font-bold text-lg uppercase"
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

      </button>
    </div>
  );
}

export default Slideshow;