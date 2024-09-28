/*import React, { useState } from 'react';
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
      <button onClick={() => setSelectedCategory('constitution')}>THE CONSTITUTION OF INDIA</button>
      <button onClick={() => setSelectedCategory('nyaya')}>THE BHARATIYA NYAYA SANHITA</button>
    </div>
  );

  const renderCategoryButtons = () => {
    const categoryButtons = {
      constitution: [
        'Fundamental Rights',
        'Elections',
        'Emergency Provisions',
        'Finance Property Conyracts and Suits',
        'The Panchayats',
        'Trade commerce and Intercourse within the territory of INDIA',
        'Of Punishments',
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

export default Chat; */

/*import React, { useState, useEffect } from 'react';
import './Chat.css';
import chatImage from '../../assets/chat.jpeg';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const customQA = {
  BNS: {
    'What is BNS?': 'BNS stands for Bharatiya Nyaya Sanhita...',
    'Explain Nyaya principles.': 'Nyaya is one of the six orthodox schools of Hindu philosophy...',
    // Add more BNS-specific Q&A pairs
  },
  Constitution: {
    'What is the Preamble?': 'The Preamble to the Constitution of India is the introductory statement...',
    'Explain Fundamental Rights.': 'Fundamental Rights are the basic human rights guaranteed by the Constitution...',
    // Add more Constitution-specific Q&A pairs
  },
  // Add more categories if needed
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('greeting'); // 'greeting', 'search', 'answer'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [listeningAnswer, setListeningAnswer] = useState(false);

  // Speech Recognition setup
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      setQuery(transcript);
    }
  }, [transcript, listening]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setView('greeting');
      resetTranscript();
      setQuery('');
      setAnswer('');
      setSelectedCategory(null);
    }
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setView('search');
    resetTranscript();
    setQuery('');
    setAnswer('');
  };

  const handleSend = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') return;

    if (selectedCategory && customQA[selectedCategory]) {
      const foundAnswer = customQA[selectedCategory][trimmedQuery];
      if (foundAnswer) {
        setAnswer(foundAnswer);
        setView('answer');
        speak(foundAnswer);
        return;
      }
    }

    // If no custom answer is found, handle API search or default response
    setAnswer("I'm sorry, I don't have an answer for that.");
    setView('answer');
    speak("I'm sorry, I don't have an answer for that.");
  };

  const handleSpeak = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  const handleListenAnswer = () => {
    if (answer) {
      speak(answer);
    }
  };

  const handleStopListen = () => {
    window.speechSynthesis.cancel();
    setListeningAnswer(false);
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setListeningAnswer(true);
      utterance.onend = () => setListeningAnswer(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const renderGreeting = () => (
    <div className="chat-content">
      <p>Hello! Namaste! 👋 How can I assist you today?</p>
      <div className="quick-search">
        <button onClick={() => handleCategorySelection('BNS')}>BNS</button>
        <button onClick={() => handleCategorySelection('Constitution')}>
          The Constitution
        </button>
      </div>
    </div>
  );

  const renderSearch = () => (
    <div className="chat-content">
      <button onClick={() => setView('greeting')} className="go-back-button">
        ← Back
      </button>
      <div className="search-section">
        <input
          type="text"
          placeholder="Type your question here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleSpeak} className="voice-button">
          🎙️
        </button>
      </div>
    </div>
  );

  const renderAnswer = () => (
    <div className="chat-content">
      <button onClick={() => setView('search')} className="go-back-button">
        ← Back
      </button>
      <div className="answer-section">
        <p>{answer}</p>
        <div className="listen-section">
          <button
            onClick={handleListenAnswer}
            className="listen-button"
            disabled={listeningAnswer}
            title="Listen to the answer"
          >
            {listeningAnswer ? '🔊 Listening...' : '🔊 Listen'}
          </button>
          <button
            onClick={handleStopListen}
            className="stop-button"
            disabled={!listeningAnswer}
            title="Stop listening"
          >
            ⏹️ Stop
          </button>
        </div>
        {listeningAnswer && (
          <div className="listening-indicator">
            <span>Speaking...</span>
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case 'greeting':
        return renderGreeting();
      case 'search':
        return renderSearch();
      case 'answer':
        return renderAnswer();
      default:
        return renderGreeting();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <>
      <button className="chat-toggle-button" onClick={toggleChat}>
        💬 Chat
      </button>
      <div className={`chat-container ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h2>Ask the Bot</h2>
          <img src={chatImage} alt="Chat Bot" className="chat-image" />
          <button className="close-button" onClick={toggleChat}>
            ×
          </button>
        </div>
        {renderContent()}
      </div>
    </>
  );
};

export default Chat; */

/*import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import chatImage from '../../assets/chat.jpeg';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const customQA = {
  BNS: {
    'What is BNS?': 'BNS stands for Bharatiya Nyaya Sanhita...',
    'Explain Nyaya principles.': 'Nyaya is one of the six orthodox schools of Hindu philosophy...',
    // Add more BNS-specific Q&A pairs
  },
  Constitution: {
    'What is the Preamble?': 'The Preamble to the Constitution of India is the introductory statement...',
    'Explain Fundamental Rights.': 'Fundamental Rights are the basic human rights guaranteed by the Constitution...',
    // Add more Constitution-specific Q&A pairs
  },
  // Add more categories if needed
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('greeting'); // 'greeting', 'search', 'answer'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [listeningAnswer, setListeningAnswer] = useState(false);
  const [messages, setMessages] = useState([]); // New state for messages

  const messagesEndRef = useRef(null); // Ref for auto-scrolling

  // Speech Recognition setup
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening) {
      setQuery(transcript);
    }
  }, [transcript, listening]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, listeningAnswer]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setView('greeting');
      resetTranscript();
      setQuery('');
      setAnswer('');
      setSelectedCategory(null);
      setMessages([]); // Reset messages when opening chat
    }
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setView('search');
    resetTranscript();
    setQuery('');
    setAnswer('');
    // Optionally, add a system message indicating the category selection
    addMessage('system', `You selected ${category}. How can I assist you within this category?`);
  };

  const handleSend = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') return;

    // Add user's message to the chat
    addMessage('user', trimmedQuery);

    if (selectedCategory && customQA[selectedCategory]) {
      const foundAnswer = customQA[selectedCategory][trimmedQuery];
      if (foundAnswer) {
        // Simulate bot response delay
        setTimeout(() => {
          addMessage('bot', foundAnswer);
          speak(foundAnswer);
        }, 500);
        setView('answer');
        setQuery('');
        resetTranscript();
        return;
      }
    }

    // If no custom answer is found, handle API search or default response
    const defaultAnswer = "I'm sorry, I don't have an answer for that.";
    setTimeout(() => {
      addMessage('bot', defaultAnswer);
      speak(defaultAnswer);
    }, 500);
    setView('answer');
    setQuery('');
    resetTranscript();
  };

  const handleSpeak = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  const handleListenAnswer = () => {
    if (answer) {
      speak(answer);
    }
  };

  const handleStopListen = () => {
    window.speechSynthesis.cancel();
    setListeningAnswer(false);
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setListeningAnswer(true);
      utterance.onend = () => setListeningAnswer(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const addMessage = (sender, content) => {
    setMessages(prevMessages => [...prevMessages, { sender, content }]);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderGreeting = () => (
    <div className="chat-content">
      <p>Hello! Namaste! 👋 How can I assist you today?</p>
      <div className="quick-search">
        <button onClick={() => handleCategorySelection('BNS')}>BNS</button>
        <button onClick={() => handleCategorySelection('Constitution')}>
          The Constitution
        </button>
      </div>
    </div>
  );

  const renderSearch = () => (
    <div className="chat-content">
      <button onClick={() => setView('greeting')} className="go-back-button">
        ← Back
      </button>
      <div className="search-section">
        <input
          type="text"
          placeholder="Type your question here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleSpeak} className="voice-button" title="Speak your query">
          🎙️
        </button>
      </div>
    </div>
  );

  const renderAnswer = () => (
    <div className="chat-content">
      <button onClick={() => setView('search')} className="go-back-button">
        ← Back
      </button>
      <div className="answer-section">

        <div className="listen-section">
          <button
            onClick={handleListenAnswer}
            className="listen-button"
            disabled={listeningAnswer}
            title="Listen to the answer"
            aria-label="Listen to the answer"
          >
            {listeningAnswer ? '🔊 Listening...' : '🔊 Listen'}
          </button>
          <button
            onClick={handleStopListen}
            className="stop-button"
            disabled={!listeningAnswer}
            title="Stop listening"
            aria-label="Stop listening"
          >
            ⏹️ Stop
          </button>
        </div>
        {listeningAnswer && (
          <div className="listening-indicator">
            <span>Speaking...</span>
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (view) {
      case 'greeting':
        return renderGreeting();
      case 'search':
        return renderSearch();
      case 'answer':
        return renderAnswer();
      default:
        return renderGreeting();
    }
  };

  const renderMessages = () => (
    <div className="messages-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
        >
          <div className="message-content">
            {msg.content}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <>
      <button className="chat-toggle-button" onClick={toggleChat} aria-label="Toggle chat">
        💬 Chat
      </button>
      <div className={`chat-container ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h2>Ask the Bot</h2>
          <img src={chatImage} alt="Chat Bot" className="chat-image" />
          <button className="close-button" onClick={toggleChat} aria-label="Close chat">
            ×
          </button>
        </div>
       
        <div className="chat-messages">
          {renderMessages()}
        </div>
      
        {renderContent()}
      </div>
    </>
  );
};

export default Chat; */

/* import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import chatImage from '../../assets/chat.jpeg';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const customQA = {
  BNS: {
    'What is BNS?': 'BNS stands for Bharatiya Nyaya Sanhita, which is...',
    'Explain Nyaya principles.': 'Nyaya is one of the six orthodox schools of Hindu philosophy...',
    // Add more BNS-specific Q&A pairs here
  },
  Constitution: {
    'What is the Preamble?': 'The Preamble to the Constitution of India is the introductory statement...',
    'Explain Fundamental Rights.': 'Fundamental Rights are the basic human rights guaranteed by the Constitution...',
    // Add more Constitution-specific Q&A pairs here
  },
  // Add more categories if needed
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('greeting'); // Views: 'greeting', 'search', 'answer'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [listeningAnswer, setListeningAnswer] = useState(false);
  const [messages, setMessages] = useState([]); // Stores conversation history

  const messagesEndRef = useRef(null); // Reference for auto-scrolling

  // Speech Recognition setup
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Update query as user speaks
  useEffect(() => {
    if (listening) {
      setQuery(transcript);
    }
  }, [transcript, listening]);

  // Auto-scroll to the latest message
  useEffect(() => {
    scrollToBottom();
  }, [messages, listeningAnswer]);

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset states when opening chat
      setView('greeting');
      resetTranscript();
      setQuery('');
      setAnswer('');
      setSelectedCategory(null);
      setMessages([]);
      // Add a system message as greeting
      addMessage('system', 'Hello! Namaste! 👋 How can I assist you today?');
    }
  };

  // Handle category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setView('search');
    resetTranscript();
    setQuery('');
    setAnswer('');
    // Add a system message indicating category selection
    addMessage('system', `You selected "${category}". How can I assist you within this category?`);
  };

  // Handle sending a query
  const handleSend = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') return;

    // Add user's message to the chat
    addMessage('user', trimmedQuery);

    if (selectedCategory && customQA[selectedCategory]) {
      const foundAnswer = customQA[selectedCategory][trimmedQuery];
      if (foundAnswer) {
        // Simulate bot response delay
        setTimeout(() => {
          addMessage('bot', foundAnswer);
          speak(foundAnswer);
        }, 500);
        setView('answer');
        setQuery('');
        resetTranscript();
        return;
      }
    }

    // Default response if no answer is found
    const defaultAnswer = "I'm sorry, I don't have an answer for that.";
    setTimeout(() => {
      addMessage('bot', defaultAnswer);
      speak(defaultAnswer);
    }, 500);
    setView('answer');
    setQuery('');
    resetTranscript();
  };

  // Start speech recognition
  const handleSpeak = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  // Stop speech recognition
  const handleStopListen = () => {
    SpeechRecognition.stopListening();
  };

  // Listen to the bot's answer
  const handleListenAnswer = () => {
    if (answer) {
      speak(answer);
    }
  };

  // Stop speech synthesis
  const handleStopSpeech = () => {
    window.speechSynthesis.cancel();
    setListeningAnswer(false);
  };

  // Speak out the text using Speech Synthesis
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setListeningAnswer(true);
      utterance.onend = () => setListeningAnswer(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Add a new message to the conversation
  const addMessage = (sender, content) => {
    setMessages(prevMessages => [...prevMessages, { sender, content }]);
  };

  // Scroll to the bottom of the messages
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render greeting view with category buttons
  const renderGreeting = () => (
    <div className="chat-content">
      <div className="quick-search">
        <button onClick={() => handleCategorySelection('BNS')}>BNS</button>
        <button onClick={() => handleCategorySelection('Constitution')}>The Constitution</button>
      </div>
    </div>
  );

  // Render search view with input and speech buttons
  const renderSearch = () => (
    <div className="chat-content">
      <div className="search-section">
        <input
          type="text"
          placeholder="Type your question here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleSpeak} className="voice-button" title="Speak your query">
          🎙️
        </button>
        <button onClick={handleStopListen} className="stop-voice-button" title="Stop speaking">
          ⏹️
        </button>
      </div>
    </div>
  );

  // Render answer view with listen and stop buttons
  const renderAnswer = () => (
    <div className="chat-content">
      <div className="answer-section">
        <div className="listen-section">
          <button
            onClick={handleListenAnswer}
            className="listen-button"
            disabled={listeningAnswer}
            title="Listen to the answer"
            aria-label="Listen to the answer"
          >
            {listeningAnswer ? '🔊 Listening...' : '🔊 Listen'}
          </button>
          <button
            onClick={handleStopSpeech}
            className="stop-button"
            disabled={!listeningAnswer}
            title="Stop listening"
            aria-label="Stop listening"
          >
            ⏹️ Stop
          </button>
        </div>
        {listeningAnswer && (
          <div className="listening-indicator">
            <span>Speaking...</span>
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );

  // Determine which view to render based on current state
  const renderContent = () => {
    switch (view) {
      case 'greeting':
        return renderGreeting();
      case 'search':
        return renderSearch();
      case 'answer':
        return renderAnswer();
      default:
        return renderGreeting();
    }
  };

  // Render all messages in the conversation
  const renderMessages = () => (
    <div className="messages-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${
            msg.sender === 'user'
              ? 'user-message'
              : msg.sender === 'bot'
              ? 'bot-message'
              : 'system-message'
          }`}
        >
          {msg.sender === 'system' && (
            <div className="system-message-content">
              {msg.content}
            </div>
          )}
          {msg.sender !== 'system' && (
            <div className="message-content">
              {msg.content}
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );

  // Handle browsers that do not support speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <>
    
      {!isOpen && (
        <button className="chat-toggle-button" onClick={toggleChat} aria-label="Open chat">
          💬
        </button>
      )}
      
      
      <div className={`chat-container ${isOpen ? 'open' : ''}`}>
       
        <div className="chat-header">
          <h2>Ask the Bot</h2>
          <img src={chatImage} alt="Chat Bot" className="chat-image" />
          <button className="close-button" onClick={toggleChat} aria-label="Close chat">
            ×
          </button>
        </div>
        
        
        <div className="chat-messages">
          {renderMessages()}
        </div>
        
        
        {renderContent()}
        
       
        {(view === 'search' || view === 'answer') && (
          <div className="chat-footer">
            <button onClick={() => setView('greeting')} className="back-button">
              ← Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat; */

import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import chatImage from '../../assets/chat.jpeg';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const customQA = {
  BharatiyaNyayaSanhita: {
    'Am I guilty if I accidentally hurt someone while following the law?': 'Section Number: 18 Title: Accident in doing a lawful actContent:Nothing is an offence which is done by accident or misfortune, and without any criminal intention or knowledge, in the doing of a lawful act in a lawful manner by lawful means and with proper care and caution.',
    'What happens if someone helps another person commit a crime?' : 'Section Number: 49 Title: Punishment of abetment if act abetted is committed in consequence and where no express provision is made for its punishmentContent: Whoever abets any offence shall, if the act abetted is committed in consequence of the abetment, and no express provision is made by this Sanhita for the punishment of such abetment, be punished with the punishment provided for the offence.',
    'Can a judge decide whether prison time will be hard or easy for someone?': 'Section Number: 7 Title: Sentence may be (in certain cases of imprisonment) wholly or partly rigorous or simple. Content: In every case in which an offender is punishable with imprisonment which may be of either description, it shall be competent to the Court which sentences such offender to direct in the sentence that such imprisonment shall be wholly rigorous, or that such imprisonment shall be wholly simple, or that any part of such imprisonment shall be rigorous and the rest simple.',
    'Can my punishment be changed by the government?':'Section Number: 5Title: Commutation of sentenceContent: The appropriate Government may, without the consent of the offender, commute any punishment under this Sanhita to any other punishment in accordance with section 474 of the Bharatiya Nagarik Suraksha Sanhita, 2023.',
  },
  Constitution: {
    'What rights do I have if I m accused of a crime?': 'Article 20 Name: Protection in respect of conviction for offences. Description: No Description.Clauses:Clause 1: No person shall be convicted of any offence except for the violation of a law in force at the time of the commission of the act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offence.Clause 2: No person shall be prosecuted and punished for the same offence more than once.Clause 3: No person accused of any offence shall be compelled to be a witness against himself.',
    'What are the voting age requirements in India?': 'Article No: 326Name: Elections to the House of the People and to the Legislative Assemblies of States to be on the basis of adult suffrage.Description: The elections to the House of the People and to the Legislative Assembly of every State shall be on the basis of adult suffrage; that is to say, every person who is a citizen of India and who is not less than eighteen years of age on such date as may be fixed in that behalf by or under any law made by the appropriate Legislature and is not otherwise disqualified under this Constitution or any law made by the appropriate Legislature on the ground of non-residence, unsoundness of mind, crime, or corrupt or illegal practice, shall be entitled to be registered as a voter at any such election.',
    'Why do my taxes go up sometimes?': 'Article No: 271Name: Surcharge on certain duties and taxes for purposes of the UnionDescription: Notwithstanding anything in articles 269 and 270, Parliament may at any time increase any of the duties or taxes referred to in those articles by a surcharge for purposes of the Union, and the whole proceeds of any such surcharge shall form part of the Consolidated Fund of India.',
    'Are there any restrictions on buying and selling things in India?': 'Article No: 301Name: Freedom of trade, commerce and intercourseDescription: Subject to the other provisions of this Part, trade, commerce and intercourse throughout the territory of India shall be free.'
  },
};

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('greeting'); // Views: 'greeting', 'search', 'answer'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [listeningAnswer, setListeningAnswer] = useState(false);
  const [messages, setMessages] = useState([]); // Stores conversation history
  const [isTyping, setIsTyping] = useState(false); // Typing indicator

  const messagesEndRef = useRef(null); // Reference for auto-scrolling

  // Speech Recognition setup
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Update query as user speaks
  useEffect(() => {
    if (listening) {
      setQuery(transcript);
    }
  }, [transcript, listening]);

  // Auto-scroll to the latest message
  useEffect(() => {
    scrollToBottom();
  }, [messages, listeningAnswer, isTyping]);

  // Toggle chat window
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Reset states when opening chat
      setView('greeting');
      resetTranscript();
      setQuery('');
      setAnswer('');
      setSelectedCategory(null);
      setMessages([]);
      // Add a system message as greeting
      addMessage('system', 'Hello! Namaste! 👋 How can I assist you today?');
    }
  };

  // Handle category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setView('search');
    resetTranscript();
    setQuery('');
    setAnswer('');
    // Add a system message indicating category selection
    addMessage('system', `You selected "${category}". How can I assist you within this category?`);
  };

  // Handle sending a query
  const handleSend = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === '') return;

    // Add user's message to the chat
    addMessage('user', trimmedQuery);

    if (selectedCategory && customQA[selectedCategory]) {
      const foundAnswer = customQA[selectedCategory][trimmedQuery];
      if (foundAnswer) {
        // Simulate bot response delay
        setIsTyping(true);
        setTimeout(() => {
          addMessage('bot', foundAnswer);
          speak(foundAnswer);
          setIsTyping(false);
        }, 1500); // Increased delay for typing effect
        setView('answer');
        setQuery('');
        resetTranscript();
        return;
      }
    }

    // Default response if no answer is found
    const defaultAnswer = "I'm sorry, I don't have an answer for that.";
    setIsTyping(true);
    setTimeout(() => {
      addMessage('bot', defaultAnswer);
      speak(defaultAnswer);
      setIsTyping(false);
    }, 1500);
    setView('answer');
    setQuery('');
    resetTranscript();
  };

  // Start speech recognition
  const handleSpeak = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  // Stop speech recognition
  const handleStopListen = () => {
    SpeechRecognition.stopListening();
  };

  // Listen to the bot's answer
  const handleListenAnswer = () => {
    if (answer) {
      speak(answer);
    }
  };

  // Stop speech synthesis
  const handleStopSpeech = () => {
    window.speechSynthesis.cancel();
    setListeningAnswer(false);
  };

  // Speak out the text using Speech Synthesis
  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => setListeningAnswer(true);
      utterance.onend = () => setListeningAnswer(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Add a new message to the conversation
  const addMessage = (sender, content) => {
    setMessages(prevMessages => [...prevMessages, { sender, content }]);
  };

  // Scroll to the bottom of the messages
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render greeting view with category buttons
  const renderGreeting = () => (
    <div className="chat-content">
      <div className="quick-search">
        <button onClick={() => handleCategorySelection('BNS')}>Bharatiya Nyaya Sanhita</button>
        <button onClick={() => handleCategorySelection('Constitution')}>The Constitution of India</button>
      </div>
    </div>
  );

  // Render search view with input and speech buttons
  const renderSearch = () => (
    <div className="chat-content">
      <div className="search-section">
        <input
          type="text"
          placeholder="Type your question here..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleSpeak} className="voice-button" title="Speak your query">
          🎙️
        </button>
        <button onClick={handleStopListen} className="stop-voice-button" title="Stop speaking">
          ⏹️
        </button>
      </div>
    </div>
  );

  // Render answer view with listen and stop buttons
  const renderAnswer = () => (
    <div className="chat-content">
      <div className="answer-section">
        {/* Listen and Stop buttons */}
        <div className="listen-section">
          <button
            onClick={handleListenAnswer}
            className="listen-button"
            disabled={listeningAnswer}
            title="Listen to the answer"
            aria-label="Listen to the answer"
          >
            {listeningAnswer ? '🔊 Listening...' : '🔊 Listen'}
          </button>
          <button
            onClick={handleStopSpeech}
            className="stop-button"
            disabled={!listeningAnswer}
            title="Stop listening"
            aria-label="Stop listening"
          >
            ⏹️ Stop
          </button>
        </div>
        {listeningAnswer && (
          <div className="listening-indicator">
            <span>Speaking...</span>
            <div className="spinner"></div>
          </div>
        )}
      </div>
    </div>
  );

  // Determine which view to render based on current state
  const renderContent = () => {
    switch (view) {
      case 'greeting':
        return renderGreeting();
      case 'search':
        return renderSearch();
      case 'answer':
        return renderAnswer();
      default:
        return renderGreeting();
    }
  };

  // Render all messages in the conversation
  const renderMessages = () => (
    <div className="messages-container">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${
            msg.sender === 'user'
              ? 'user-message'
              : msg.sender === 'bot'
              ? 'bot-message'
              : 'system-message'
          }`}
        >
          {msg.sender === 'system' && (
            <div className="system-message-content">
              {msg.content}
            </div>
          )}
          {msg.sender !== 'system' && (
            <div className="message-content">
              {msg.content}
            </div>
          )}
        </div>
      ))}
      {isTyping && (
        <div className="message bot-message">
          <div className="message-content typing-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );

  // Handle browsers that do not support speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <>
      {/* Chat Toggle Button (Hidden when chat is open) */}
      {!isOpen && (
        <button className="chat-toggle-button" onClick={toggleChat} aria-label="Open chat">
          💬
        </button>
      )}
      
      {/* Chat Window */}
      <div className={`chat-container ${isOpen ? 'open' : ''}`}>
        {/* Chat Header */}
        <div className="chat-header">
          <h2>Ask the Bot</h2>
          <img src={chatImage} alt="Chat Bot" className="chat-image" />
          <button className="close-button" onClick={toggleChat} aria-label="Close chat">
            ×
          </button>
        </div>
        
        {/* Messages Display */}
        <div className="chat-messages">
          {renderMessages()}
        </div>
        
        {/* Dynamic Content Based on Current View */}
        {renderContent()}
        
        {/* Back Button at the Bottom (Visible in 'search' and 'answer' views) */}
        {(view === 'search' || view === 'answer') && (
          <div className="chat-footer">
            <button onClick={() => setView('greeting')} className="back-button">
              ← Back
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;





