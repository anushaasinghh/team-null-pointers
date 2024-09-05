import React, { useState, useEffect } from 'react';
import './Slideshow.css'; 

const images = [
  '../../assets/pexels-olly-3760067.jpg', 
  '../../assets/slide2.jpeg',
  '../../assets/slide3.jpeg',
  '../../assets/SLIDE4.jpeg',
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='slideshow'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slideshow-images ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;


