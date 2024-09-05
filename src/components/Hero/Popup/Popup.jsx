import React, { useState } from 'react';
import './Popup.css'; 

const Popup = ({ text, handleFetchResponse, loading, error, responseText, onClose }) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleTranslate = () => {
    setIsTranslating(true);
    
    setTimeout(() => {
      setIsTranslating(false);
      alert('Translating'); 
    }, 1000);
  };

  const handleSpeak = () => {
    setIsSpeaking(true);
    setTimeout(() => {
      setIsSpeaking(false);
      alert('Converting'); 
    }, 1000);
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h3>Bharatiya Nyaya Sanhita 2023</h3>
        <p>{text}</p>
        <button onClick={handleFetchResponse} disabled={loading}>
          {loading ? 'Loading...' : 'Simplify'}
        </button>
        {error && <p className='error-text'>{error}</p>}
        {responseText && <p>{responseText}</p>}
        <button onClick={handleTranslate} disabled={isTranslating}>
          {isTranslating ? 'Translating...' : 'Translate'}
        </button>
        <button onClick={handleSpeak} disabled={isSpeaking}>
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
