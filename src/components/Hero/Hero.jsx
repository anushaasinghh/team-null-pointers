/*import React, { useState } from 'react';
import './Hero.css';
import OptionsPage from './OptionsPage/OptionsPage'; 

const Hero = () => {
  const [showOptionsPage, setShowOptionsPage] = useState(false);

  const handleButtonClick = () => {
    setShowOptionsPage(true);
  };

  return (
    <div className='hero'>
      {showOptionsPage ? (
        <OptionsPage /> 
      ) : (
        <div className='hero-text'>
          <h1>Explore Constitutional Knowledge and Receive Real-Time Legal Answers</h1>
          <p>
            Empower yourself with a deep understanding of the constitution and gain quick, reliable answers to your legal questions.
            Our platform provides detailed insights into constitutional law, making complex concepts accessible and easy to understand.
            Whether you're exploring your rights or seeking immediate legal advice, our interactive tools and chatbot are here to guide you every step of the way.
          </p>
          <button className='hero-button' onClick={handleButtonClick}>
            Read The Constitution of India
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero; */


import React, { useState } from 'react';
import './Hero.css';
import OptionsPage from './OptionsPage/OptionsPage'; 

const Hero = () => {
  const [showOptionsPage, setShowOptionsPage] = useState(false);

  const handleButtonClick = () => {
    setShowOptionsPage(true);
  };

  const handleLearnMoreClick = () => {
    // Add logic for Learn More if needed
    console.log("Learn More button clicked!");
  };

  return (
    <div className='hero'>
      {showOptionsPage ? (
        <OptionsPage /> 
      ) : (
        <div className='hero-text'>
          <h1>Explore Constitutional Knowledge and Receive Real-Time Legal Answers</h1>
          <p>
            Empower yourself with a deep understanding of the constitution and gain quick, reliable answers to your legal questions.
            Our platform provides detailed insights into constitutional law, making complex concepts accessible and easy to understand.
            Whether you're exploring your rights or seeking immediate legal advice, our interactive tools and chatbot are here to guide you every step of the way.
          </p>
          <button className='hero-button' onClick={handleButtonClick}>
            Read The Constitution of India
          </button>
          <button className='hero-button' onClick={handleLearnMoreClick}>
            Read Bharatiya Nyaya Sanhita
          </button>
        </div>
      )}
    </div>
  );
};

export default Hero;

