import React, { useState } from 'react';
import './Chat.css'; 
import chatImage from '../../assets/chat.jpeg';

const Chat = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [noResults, setNoResults] = useState(false);

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

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Ask the Bot</h2>
        <img src={chatImage} alt="Chat Bot" className="chat-image" />
      </div>
      <div className="quick-search">
        <button onClick={() => handleQuickSearch('Criminal Laws')}>Criminal Laws</button>
        <button onClick={() => handleQuickSearch('Civic Laws')}>Civic Laws</button>
        <button onClick={() => handleQuickSearch('Fundamental Rights')}>Fundamental Rights</button>
        <button onClick={() => handleQuickSearch('Preamble')}>Preamble</button>
        <button onClick={() => handleQuickSearch('Union Territories')}>Union Territories</button>
        <button onClick={() => handleQuickSearch('Citizenship')}>Citizenship</button>
        <button onClick={() => handleQuickSearch('More')}>More</button>
      </div>
      <div className="search-section">
        <input
          type="text"
          placeholder="Type your question here..."
          value={query}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>Search</button>
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
