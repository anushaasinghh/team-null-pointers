import React, { useState } from 'react';
import './Chat.css';
import chatImage from '../../assets/chat.jpeg';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Chat = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Speech Recognition setup
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    setError('');
    setNoResults(false);

    fetch(`/api/search?query=${encodeURIComponent(query)}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          setNoResults(true);
        } else {
          setResults(data);
        }
        setLoading(false);
      })
      .catch(error => {
        setError('An error occurred while searching.');
        setLoading(false);
      });
  };

  const handleQuickSearch = (query) => {
    setQuery(query);
    handleSearch();
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setQuery(transcript);
    resetTranscript();
  };

  const renderInitialButtons = () => (
    <div className="quick-search">
      <button onClick={() => setSelectedCategory('constitution')}>THE_CONSTITUTION_OF_INDIA</button>
      <button onClick={() => setSelectedCategory('nyaya')}>THE_BHARATIYA_NYAYA_SANHITA</button>
    </div>
  );

  const renderCategoryButtons = () => {
    const categoryButtons = {
      constitution: [
        'Fundamental_Rights',
        'Elections',
        'Emergency_Provisions',
        'Finance_Property_Conyracts_and_Suits',
        'The_Panchayats',
        'Trade_commerce_and_Intercourse_within_the_territory_of_INDIA'
      ],
      nyaya: [
        'GENERAL_EXCEPTIONS,
        'OF_OFFENCES_AGAINST_WOMEN_AND_CHILD',
        'OF_PUNISHMENTS','OF_ABETMENT_CRIMINAL_CONSPIRACY_AND_ATTEMPT',"PRELIMINARY'
      ],
    };

    return (
      <div className="quick-search">
        <button onClick={() => setSelectedCategory(null)} className="go-back-button">Go Back</button>
        {categoryButtons[selectedCategory].map((category, index) => (
          <button key={index} onClick={() => handleQuickSearch(category)}>
            {category}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Ask the Bot</h2>
        <img src={chatImage} alt="Chat Bot" className="chat-image" />
      </div>
      {selectedCategory === null ? renderInitialButtons() : renderCategoryButtons()}
      <div className="search-section">
        <input
          type="text"
          placeholder="Type your question here..."
          value={query}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={startListening} className="voice-button">🎙️</button>
        <button onClick={stopListening} className="voice-button">Stop</button>
      </div>
      <div className="results-section">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {noResults && !loading && <p>No results found.</p>}
        {results.length > 0 && !loading && (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Chat;

