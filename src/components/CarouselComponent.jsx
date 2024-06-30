import React, { useState, useEffect } from 'react';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const images = [
  "/Images/banner1.jpeg",
  "/Images/banner2.jpeg",
  "/Images/banner1.jpeg"
];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-full mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2"
        onClick={handlePrev}
      >
      <FaAngleLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2"
        onClick={handleNext}
      >
       <FaAngleRight />
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#1c085d]' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
