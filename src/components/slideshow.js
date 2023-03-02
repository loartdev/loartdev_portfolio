import React, { useState, useEffect, useRef } from "react";

function Slideshow(props) {
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
          prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
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
      currentIndex === 0 ? props.images.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    resetTimeout();
    setCurrentIndex(
      currentIndex === props.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      <div
        className="absolute h-full w-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {props.images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="object-cover h-full w-full flex-none"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-800 border-none py-2 px-4 cursor-pointer font-bold text-lg uppercase"
        onClick={previousSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-800 border-none py-2 px-4 cursor-pointer font-bold text-lg uppercase"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
}

export default Slideshow;