import React, { useState } from 'react';
import './Popup.css'; 

const Popup = ({ text, handleFetchResponse, loading, error, responseText, onClose }) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    setIsTranslating(true);
    setShowTranslateOptions(!showTranslateOptions);
    setTimeout(() => {
      setIsTranslating(false);
    }, 1000);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowTranslateOptions(false);
    setIsTranslating(true);
    // fetch translated txt frm bg
    fetchTranslatedText(language);
  };

  const fetchTranslatedText = (language) => {
    // backend cll
    setTimeout(() => {
      setTranslatedText(`Translated text in ${language}`);
      setIsTranslating(false);
    }, 1000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h3>The Constitution of India</h3>
        <p>{text}</p>
        <button onClick={handleFetchResponse} disabled={loading}>
          {loading ? 'Loading...' : 'Simplify'}
        </button>
        {error && <p className='error-text'>{error}</p>}
        {responseText && <p>{responseText}</p>}
        <button onClick={handleTranslate} disabled={isTranslating}>
          {isTranslating ? 'Translating...' : 'Translate'}
        </button>
        {showTranslateOptions && (
          <div className='translate-options'>
            <button onClick={() => handleLanguageSelect('Hindi')}>Hindi</button>
            <button onClick={() => handleLanguageSelect('Bengali')}>Bengali</button>
            <button onClick={() => handleLanguageSelect('Urdu')}>Urdu</button>
          </div>
        )}
        {selectedLanguage && (
          <div className='translated-text'>
            <p>{translatedText}</p>
          </div>
        )}
        <button onClick={handleSpeak} disabled={isSpeaking}>
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;

