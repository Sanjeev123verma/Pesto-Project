import React, { useState, useEffect } from 'react';

const images = [
  'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg',
  'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg',
  'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = (numImages) => {
    const endIndex = currentIndex + numImages;
    return images.slice(currentIndex, endIndex).concat(
      images.slice(0, endIndex - images.length)
    ).slice(0, numImages);
  };

  const visibleImagesDesktop = getVisibleImages(4);
  const visibleImagesMobile = getVisibleImages(2);

  return (
    <div className="relative w-full overflow-hidden">
      <button 
        onClick={prevSlide} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2">
        Prev
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2">
        Next
      </button>
      
      <div className="hidden md:flex w-full">
        {visibleImagesDesktop.map((image, index) => (
          <img key={index} src={image} alt={`slide-${index}`} className="w-1/4" />
        ))}
      </div>

      <div className="flex md:hidden w-full">
        {visibleImagesMobile.map((image, index) => (
          <img key={index} src={image} alt={`slide-${index}`} className="w-1/2" />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
