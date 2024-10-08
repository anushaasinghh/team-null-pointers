// // // // import React, { useState } from 'react';
// // // // import './Popup.css'; 

// // // // const Popup = ({ text, handleFetchResponse, loading, error, responseText, onClose }) => {
// // // //   const [isTranslating, setIsTranslating] = useState(false);
// // // //   const [isSpeaking, setIsSpeaking] = useState(false);
// // // //   const [showTranslateOptions, setShowTranslateOptions] = useState(false);
// // // //   const [selectedLanguage, setSelectedLanguage] = useState(null);
// // // //   const [translatedText, setTranslatedText] = useState('');

// // // //   const handleTranslate = () => {
// // // //     setIsTranslating(true);
// // // //     setShowTranslateOptions(!showTranslateOptions);
// // // //     setTimeout(() => {
// // // //       setIsTranslating(false);
// // // //     }, 1000);
// // // //   };

// // // //   const handleLanguageSelect = (language) => {
// // // //     setSelectedLanguage(language);
// // // //     setShowTranslateOptions(false);
// // // //     setIsTranslating(true);
// // // //     // fetch translated txt frm bg
// // // //     fetchTranslatedText(language);
// // // //   };

// // // //   const fetchTranslatedText = (language) => {
// // // //     // backend cll
// // // //     setTimeout(() => {
// // // //       setTranslatedText(`Translated text in ${language}`);
// // // //       setIsTranslating(false);
// // // //     }, 1000);
// // // //   };

// // // //   const handleSpeak = () => {
// // // //     if ('speechSynthesis' in window) {
// // // //       setIsSpeaking(true);
// // // //       const utterance = new SpeechSynthesisUtterance(text);
// // // //       utterance.onend = () => {
// // // //         setIsSpeaking(false);
// // // //       };
// // // //       window.speechSynthesis.speak(utterance);
// // // //     } else {
// // // //       alert('Text-to-speech is not supported in this browser.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className='popup'>
// // // //       <div className='popup-content'>
// // // //         <h3>The Constitution of India</h3>
// // // //         <p>{text}</p>
// // // //         <button onClick={handleFetchResponse} disabled={loading}>
// // // //           {loading ? 'Loading...' : 'Simplify'}
// // // //         </button>
// // // //         {error && <p className='error-text'>{error}</p>}
// // // //         {responseText && <p>{responseText}</p>}
// // // //         <button onClick={handleTranslate} disabled={isTranslating}>
// // // //           {isTranslating ? 'Translating...' : 'Translate'}
// // // //         </button>
// // // //         {showTranslateOptions && (
// // // //           <div className='translate-options'>
// // // //             <button onClick={() => handleLanguageSelect('Hindi')}>Hindi</button>
// // // //             <button onClick={() => handleLanguageSelect('Bengali')}>Bengali</button>
// // // //             <button onClick={() => handleLanguageSelect('Urdu')}>Urdu</button>
// // // //           </div>
// // // //         )}
// // // //         {selectedLanguage && (
// // // //           <div className='translated-text'>
// // // //             <p>{translatedText}</p>
// // // //           </div>
// // // //         )}
// // // //         <button onClick={handleSpeak} disabled={isSpeaking}>
// // // //           {isSpeaking ? 'Speaking...' : 'Speak'}
// // // //         </button>
// // // //         <button onClick={onClose}>Close</button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Popup;

// // // import React, { useState } from 'react';
// // // import './Popup.css'; 
// // // import { simplify } from './openai'; // Import the simplify function

// // // const Popup = ({ text, handleFetchResponse, loading, error, responseText, onClose }) => {
// // //   const [isTranslating, setIsTranslating] = useState(false);
// // //   const [isSpeaking, setIsSpeaking] = useState(false);
// // //   const [showTranslateOptions, setShowTranslateOptions] = useState(false);
// // //   const [selectedLanguage, setSelectedLanguage] = useState(null);
// // //   const [translatedText, setTranslatedText] = useState('');
// // //   const [simplifiedText, setSimplifiedText] = useState('');

// // //   const handleTranslate = () => {
// // //     setIsTranslating(true);
// // //     setShowTranslateOptions(!showTranslateOptions);
// // //     setTimeout(() => {
// // //       setIsTranslating(false);
// // //     }, 1000);
// // //   };

// // //   const handleLanguageSelect = (language) => {
// // //     setSelectedLanguage(language);
// // //     setShowTranslateOptions(false);
// // //     setIsTranslating(true);
// // //     fetchTranslatedText(language);
// // //   };

// // //   const fetchTranslatedText = (language) => {
// // //     // Simulate backend call
// // //     setTimeout(() => {
// // //       setTranslatedText(`Translated text in ${language}`);
// // //       setIsTranslating(false);
// // //     }, 1000);
// // //   };

// // //   const handleSpeak = () => {
// // //     if ('speechSynthesis' in window) {
// // //       setIsSpeaking(true);
// // //       const utterance = new SpeechSynthesisUtterance(text);
// // //       utterance.onend = () => {
// // //         setIsSpeaking(false);
// // //       };
// // //       window.speechSynthesis.speak(utterance);
// // //     } else {
// // //       alert('Text-to-speech is not supported in this browser.');
// // //     }
// // //   };

// // //   const handleSimplify = async () => {
// // //     try {
// // //       const response = await simplify(text); // Pass the text to simplify function
// // //       setSimplifiedText(response.candidates[0].content.parts[0].text);
// // //     } catch (error) {
// // //       console.error('Error simplifying text:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div className='popup'>
// // //       <div className='popup-content'>
// // //         <h3>The Constitution of India</h3>
// // //         <p>{text}</p>
// // //         <button onClick={handleSimplify} disabled={loading}>
// // //           {loading ? 'Loading...' : 'Simplify'}
// // //         </button>
// // //         {error && <p className='error-text'>{error}</p>}
// // //         {responseText && <p>{responseText}</p>}
// // //         {simplifiedText && (
// // //           <div className='simplified-text'>
// // //             <p>{simplifiedText}</p>
// // //           </div>
// // //         )}
// // //         <button onClick={handleTranslate} disabled={isTranslating}>
// // //           {isTranslating ? 'Translating...' : 'Translate'}
// // //         </button>
// // //         {showTranslateOptions && (
// // //           <div className='translate-options'>
// // //             <button onClick={() => handleLanguageSelect('Hindi')}>Hindi</button>
// // //             <button onClick={() => handleLanguageSelect('Bengali')}>Bengali</button>
// // //             <button onClick={() => handleLanguageSelect('Urdu')}>Urdu</button>
// // //           </div>
// // //         )}
// // //         {selectedLanguage && (
// // //           <div className='translated-text'>
// // //             <p>{translatedText}</p>
// // //           </div>
// // //         )}
// // //         <button onClick={handleSpeak} disabled={isSpeaking}>
// // //           {isSpeaking ? 'Speaking...' : 'Speak'}
// // //         </button>
// // //         <button onClick={onClose}>Close</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Popup;


// // import React, { useState } from 'react';
// // import './Popup.css'; 
// // import { simplify } from './openai'; // Ensure correct import path

// // const Popup = ({ text, handleFetchResponse, error, responseText, onClose }) => {
// //   const [isTranslating, setIsTranslating] = useState(false);
// //   const [isSpeaking, setIsSpeaking] = useState(false);
// //   const [showTranslateOptions, setShowTranslateOptions] = useState(false);
// //   const [selectedLanguage, setSelectedLanguage] = useState(null);
// //   const [translatedText, setTranslatedText] = useState('');
// //   const [simplifiedText, setSimplifiedText] = useState(''); // State for simplified text
// //   const [loading, setLoading] = useState(false); // State for loading

// //   const handleTranslate = () => {
// //     setIsTranslating(true);
// //     setShowTranslateOptions(!showTranslateOptions);
// //     setTimeout(() => {
// //       setIsTranslating(false);
// //     }, 1000);
// //   };

// //   const handleLanguageSelect = (language) => {
// //     setSelectedLanguage(language);
// //     setShowTranslateOptions(false);
// //     setIsTranslating(true);
// //     fetchTranslatedText(language);
// //   };

// //   const fetchTranslatedText = (language) => {
// //     // Simulate backend call
// //     setTimeout(() => {
// //       setTranslatedText(`Translated text in ${language}`);
// //       setIsTranslating(false);
// //     }, 1000);
// //   };

// //   const handleSpeak = () => {
// //     if ('speechSynthesis' in window) {
// //       setIsSpeaking(true);
// //       const utterance = new SpeechSynthesisUtterance(text);
// //       utterance.onend = () => {
// //         setIsSpeaking(false);
// //       };
// //       window.speechSynthesis.speak(utterance);
// //     } else {
// //       alert('Text-to-speech is not supported in this browser.');
// //     }
// //   };

// //   const handleSimplify = async () => {
// //     try {
// //       setLoading(true); // Show loading state
// //       const result = await simplify(text);
// //       setSimplifiedText(result); // Update state with simplified text
// //     } catch (error) {
// //       console.error('Error simplifying text:', error);
// //       // Handle error if needed
// //     } finally {
// //       setLoading(false); // Hide loading state
// //     }
// //   };

// //   return (
// //     <div className='popup'>
// //       <div className='popup-content'>
// //         <h3>The Constitution of India</h3>
// //         <p>{text}</p>
// //         <button onClick={handleFetchResponse} disabled={loading}>
// //           {loading ? 'Loading...' : 'Fetch Response'}
// //         </button>
// //         <button onClick={handleSimplify} disabled={loading}>
// //           {loading ? 'Simplifying...' : 'Simplify'}
// //         </button>
// //         {error && <p className='error-text'>{error}</p>}
// //         {responseText && <p>{responseText}</p>}
// //         {simplifiedText && <p>{simplifiedText}</p>}
// //         <button onClick={handleTranslate} disabled={isTranslating}>
// //           {isTranslating ? 'Translating...' : 'Translate'}
// //         </button>
// //         {showTranslateOptions && (
// //           <div className='translate-options'>
// //             <button onClick={() => handleLanguageSelect('Hindi')}>Hindi</button>
// //             <button onClick={() => handleLanguageSelect('Bengali')}>Bengali</button>
// //             <button onClick={() => handleLanguageSelect('Urdu')}>Urdu</button>
// //           </div>
// //         )}
// //         {selectedLanguage && (
// //           <div className='translated-text'>
// //             <p>{translatedText}</p>
// //           </div>
// //         )}
// //         <button onClick={handleSpeak} disabled={isSpeaking}>
// //           {isSpeaking ? 'Speaking...' : 'Speak'}
// //         </button>
// //         <button onClick={onClose}>Close</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Popup;


// import React, { useState } from 'react';
// import './Popup.css'; 
// import { getOpenAIResponse } from './openai'; // Ensure correct import path

// const Popup = ({ text, handleFetchResponse, error, responseText, onClose }) => {
//   const [isTranslating, setIsTranslating] = useState(false);
//   const [isSpeaking, setIsSpeaking] = useState(false);
//   const [showTranslateOptions, setShowTranslateOptions] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState(null);
//   const [translatedText, setTranslatedText] = useState('');
//   const [simplifiedText, setSimplifiedText] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleTranslate = () => {
//     setIsTranslating(true);
//     setShowTranslateOptions(!showTranslateOptions);
//     setTimeout(() => {
//       setIsTranslating(false);
//     }, 1000);
//   };

//   const handleLanguageSelect = (language) => {
//     setSelectedLanguage(language);
//     setShowTranslateOptions(false);
//     setIsTranslating(true);
//     fetchTranslatedText(language);
//   };

//   const fetchTranslatedText = (language) => {
//     setTimeout(() => {
//       setTranslatedText(`Translated text in ${language}`);
//       setIsTranslating(false);
//     }, 1000);
//   };

//   const handleSpeak = () => {
//     if ('speechSynthesis' in window) {
//       setIsSpeaking(true);
//       const utterance = new SpeechSynthesisUtterance(text);
//       utterance.onend = () => {
//         setIsSpeaking(false);
//       };
//       window.speechSynthesis.speak(utterance);
//     } else {
//       alert('Text-to-speech is not supported in this browser.');
//     }
//   };

//   const handleSimplify = async () => {
//     setLoading(true);
//     try {
//       const prompt = `Explain this using common words in reference with the Indian constitution\n\n\n${text}`;
//       const response = await getOpenAIResponse(prompt);
//       console.log('API Response:', response); // Check the response structure
//       const simplifiedText = response.contents[0]?.parts[0]?.text || 'No simplified text found';
//       setSimplifiedText(simplifiedText);
//     } catch (error) {
//       console.error('Error simplifying text:', error);
//       setSimplifiedText('An error occurred while simplifying the text.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className='popup'>
//       <div className='popup-content'>
//         <h3>The Constitution of India</h3>
//         <p>{text}</p>
//         <button onClick={handleFetchResponse} disabled={loading}>
//           {loading ? 'Loading...' : 'Fetch Response'}
//         </button>
//         <button onClick={handleSimplify} disabled={loading}>
//           {loading ? 'Simplifying...' : 'Simplify'}
//         </button>
//         {error && <p className='error-text'>{error}</p>}
//         {responseText && <p>{responseText}</p>}
//         {simplifiedText && <p>{simplifiedText}</p>}
//         <button onClick={handleTranslate} disabled={isTranslating}>
//           {isTranslating ? 'Translating...' : 'Translate'}
//         </button>
//         {showTranslateOptions && (
//           <div className='translate-options'>
//             <button onClick={() => handleLanguageSelect('Hindi')}>Hindi</button>
//             <button onClick={() => handleLanguageSelect('Bengali')}>Bengali</button>
//             <button onClick={() => handleLanguageSelect('Urdu')}>Urdu</button>
//           </div>
//         )}
//         {selectedLanguage && (
//           <div className='translated-text'>
//             <p>{translatedText}</p>
//           </div>
//         )}
//         <button onClick={handleSpeak} disabled={isSpeaking}>
//           {isSpeaking ? 'Speaking...' : 'Speak'}
//         </button>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Popup;


/*import React, { useState } from 'react';
import './Popup.css'; 
import { getOpenAIResponse } from './openai'; 

const Popup = ({ text, handleFetchResponse, error, responseText, onClose }) => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [loading, setLoading] = useState(false);

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
    fetchTranslatedText(language);
  };

  const fetchTranslatedText = (language) => {
    setTimeout(async () =>{
      const prefix = `Translate this to ${language}\n\n`;
      const response = await getOpenAIResponse(prefix+text);
      console.log('API Response:', response); // Check the response structure
      const translatedText = response.candidates[0].content.parts[0].text;
      setTranslatedText(translatedText);
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

  const handleSimplify = async () => {
    setLoading(true);
    try {
      const prompt = `Explain this using common words in reference with the Indian constitution\n\n\n${text}`;
      console.log("harsh");
      const response = await getOpenAIResponse(prompt);
      console.log('API Response:', response); // Check the response structure
      const simplifiedText = response.candidates[0].content.parts[0].text || 'No simplified text found';
      setSimplifiedText(simplifiedText);
    } catch (error) {
      console.error('Error simplifying text:', error);
      setSimplifiedText('An error occurred while simplifying the text.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <h3>The Constitution of India</h3>
        <p>{text}</p>
        <button onClick={handleFetchResponse} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Response'}
        </button>
        <button onClick={handleSimplify} disabled={loading}>
          {loading ? 'Simplifying...' : 'Simplify'}
        </button>
        {console.log("inside component")}
        {error && <p className='error-text'>{error}</p>}
        {responseText && <p>{responseText}</p>}
        {simplifiedText && <p>{simplifiedText}</p>}
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

export default Popup; */



/*import React, { useState } from 'react';
import './Popup.css'; 

const Popup = ({ text, onClose }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  // Predefined simplified text and translations
  const predefinedSimplifiedText = "This is the simplified version of the Constitution text.";
  const predefinedTranslations = {
    Hindi: "यह संविधान पाठ का सरल संस्करण है।",
    Bengali: "এটি সংবিধানের সরলীকৃত সংস্করণ।",
    Urdu: "یہ آئین کے متن کا آسان ورژن ہے۔"
  };

  const handleSimplify = () => {
    // Set the predefined simplified text
    setSimplifiedText(predefinedSimplifiedText);
  };

  const handleTranslate = () => {
    setShowTranslateOptions(!showTranslateOptions);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    // Set the predefined translated text based on selected language
    setTranslatedText(predefinedTranslations[language] || '');
    setShowTranslateOptions(false);
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
    <div className='popup-overlay'>
      <div className='popup-content'>
        <button className='popup-close' onClick={onClose} aria-label="Close Popup">X</button>
        <h3>The Constitution of India</h3>
        <p>{text}</p>
        
        
        <button onClick={handleSimplify} aria-label="Simplify Text">
          Simplify
        </button>
        {simplifiedText && (
          <textarea 
            className='text-area'
            value={simplifiedText}
            readOnly
            rows={4}
            aria-label="Simplified Text"
          />
        )}

       
        <button onClick={handleTranslate} aria-label="Translate Text">
          Translate
        </button>
        {showTranslateOptions && (
          <div className='translate-options'>
            <button onClick={() => handleLanguageSelect('Hindi')} aria-label="Translate to Hindi">Hindi</button>
            <button onClick={() => handleLanguageSelect('Bengali')} aria-label="Translate to Bengali">Bengali</button>
            <button onClick={() => handleLanguageSelect('Urdu')} aria-label="Translate to Urdu">Urdu</button>
          </div>
        )}
        {selectedLanguage && (
          <textarea 
            className='text-area'
            value={translatedText}
            readOnly
            rows={4}
            aria-label={`Translated Text in ${selectedLanguage}`}
          />
        )}

        
        <button onClick={handleSpeak} disabled={isSpeaking} aria-label="Speak Text">
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>

        <button onClick={onClose} aria-label="Close Popup">Close</button>
      </div>
    </div>
  );
};

export default Popup; */

// src/components/Hero/Popup/Popup.jsx

/*import React, { useState } from 'react';
import './Popup.css'; 

const Popup = ({ data, onClose }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  const handleSimplify = () => {
    setSimplifiedText(data.simplifiedText);
  };

  const handleTranslate = () => {
    setShowTranslateOptions(!showTranslateOptions);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setTranslatedText(data.translations[language] || '');
    setShowTranslateOptions(false);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(data.mainText);
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
        <button className='popup-close' onClick={onClose} aria-label="Close Popup">X</button>
        <h3>The Constitution of India</h3>
        <p>{data.mainText}</p>
        
        <button onClick={handleSimplify} aria-label="Simplify Text">
          Simplify
        </button>
        {simplifiedText && (
          <textarea 
            className='text-area'
            value={simplifiedText}
            readOnly
            rows={4}
            aria-label="Simplified Text"
          />
        )}

        <button onClick={handleTranslate} aria-label="Translate Text">
          Translate
        </button>
        {showTranslateOptions && (
          <div className='translate-options'>
            <button onClick={() => handleLanguageSelect('Hindi')} aria-label="Translate to Hindi">Hindi</button>
            <button onClick={() => handleLanguageSelect('Bengali')} aria-label="Translate to Bengali">Bengali</button>
            <button onClick={() => handleLanguageSelect('Urdu')} aria-label="Translate to Urdu">Urdu</button>
          </div>
        )}
        {selectedLanguage && (
          <textarea 
            className='text-area'
            value={translatedText}
            readOnly
            rows={4}
            aria-label={`Translated Text in ${selectedLanguage}`}
          />
       ) }

        
        <button onClick={handleSpeak} disabled={isSpeaking} aria-label="Speak Text">
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>

        
        <button onClick={onClose} aria-label="Close Popup">Close</button>
      </div>
    </div>
  );
};

export default Popup;*/

// src/components/Hero/Popup/Popup.jsx

/*import React, { useState } from 'react';
import './Popup.css'; 

const Popup = ({ data, onClose }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  // Handler to start speaking the main text
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(data.mainText);

      // When speech ends, update the state
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      // Start speaking
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  // Handler to stop speaking
  const handleStop = () => { // *** New Function ***
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech
      setIsSpeaking(false); // Update the state to reflect that speaking has stopped
    }
  };

  const handleSimplify = () => {
    setSimplifiedText(data.simplifiedText);
  };

  const handleTranslate = () => {
    setShowTranslateOptions(!showTranslateOptions);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setTranslatedText(data.translations[language] || '');
    setShowTranslateOptions(false);
  };

  return (
    <div className='popup-overlay'>
      <div className='popup-content'>
     
        <button className='popup-close' onClick={onClose} aria-label="Close Popup">X</button>
        
        <h3>The Constitution of India</h3>
        <p>{data.mainText}</p>
        
       
        <button onClick={handleSimplify} aria-label="Simplify Text">
          Simplify
        </button>
        {simplifiedText && (
          <textarea 
            className='text-area'
            value={simplifiedText}
            readOnly
            rows={4}
            aria-label="Simplified Text"
          />
        )}

        
        <button onClick={handleTranslate} aria-label="Translate Text">
          Translate
        </button>
        {showTranslateOptions && (
          <div className='translate-options'>
            <button onClick={() => handleLanguageSelect('Hindi')} aria-label="Translate to Hindi">Hindi</button>
            <button onClick={() => handleLanguageSelect('Bengali')} aria-label="Translate to Bengali">Bengali</button>
            <button onClick={() => handleLanguageSelect('Urdu')} aria-label="Translate to Urdu">Urdu</button>
          </div>
        )}
        {selectedLanguage && (
          <textarea 
            className='text-area'
            value={translatedText}
            readOnly
            rows={4}
            aria-label={`Translated Text in ${selectedLanguage}`}
          />
        )}

      
        <button onClick={handleSpeak} disabled={isSpeaking} aria-label="Speak Text">
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>

        
        {isSpeaking && (
          <button 
            onClick={handleStop} 
            aria-label="Stop Speaking"
            className="stop-button" // Optional: Add a class for specific styling
          >
            Stop
          </button>
        )}

     
        <button onClick={onClose} aria-label="Close Popup">Close</button>
      </div>
    </div>
  );
};

export default Popup;*/

// src/components/Hero/Popup/Popup.jsx

// src/components/Hero/Popup/Popup.jsx

import React, { useState } from 'react';
import './Popup.css'; 

const Popup = ({ data, onClose }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');

  // Handler to start speaking the main text
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(data.mainText);

      // When speech ends, update the state
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      // Start speaking
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  // Handler to stop speaking
  const handleStop = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); 
      setIsSpeaking(false); 
    }
  };

  const handleSimplify = () => {
    setSimplifiedText(data.simplifiedText);
  };

  const handleTranslate = () => {
    setShowTranslateOptions(!showTranslateOptions);
  };

  const handleLanguageSelect = (language) => {
    if (data.translations[language]) {
      setSelectedLanguage(language);
      setTranslatedText(data.translations[language]);
    } else {
      setSelectedLanguage(language);
      setTranslatedText('Translation not available.');
    }
    setShowTranslateOptions(false);
  };
  const isPreamble = data.mainText.toLowerCase().includes('we, the people') || data.mainText.toLowerCase().includes('preamble');

  return (
    <div className='popup-overlay' role="dialog" aria-modal="true">
      <div className='popup-content'>
        {/* Close Button */}
        <button className='popup-close' onClick={onClose} aria-label="Close Popup">X</button>
        <div className='popup-body'>
        
    
        <h3>{isPreamble ? 'Preamble' : 'The Constitution of India'}</h3>
        <p>{data.mainText}</p>
        
        {/* Simplify Button */}
        <button onClick={handleSimplify} aria-label="Simplify Text">
          Simplify
        </button>
        {simplifiedText && (
          <textarea 
            className='text-area'
            value={simplifiedText}
            readOnly
            rows={4}
            aria-label="Simplified Text"
          />
        )}

        {/* Translate Button */}
        <button onClick={handleTranslate} aria-label="Translate Text">
          Translate
        </button>
        {showTranslateOptions && (
          <div className='translate-options'>
            <button onClick={() => handleLanguageSelect('Hindi')} aria-label="Translate to Hindi">Hindi</button>
            <button onClick={() => handleLanguageSelect('Bengali')} aria-label="Translate to Bengali">Bengali</button>
            <button onClick={() => handleLanguageSelect('Urdu')} aria-label="Translate to Urdu">Urdu</button>
          </div>
        )}
        {selectedLanguage && (
          <textarea 
            className='text-area'
            value={translatedText}
            readOnly
            rows={4}
            aria-label={`Translated Text in ${selectedLanguage}`}
          />
        )}

        {/* Speak Button */}
        <button onClick={handleSpeak} disabled={isSpeaking} aria-label="Speak Text">
          {isSpeaking ? 'Speaking...' : 'Speak'}
        </button>

        {/* Stop Button */}
        {isSpeaking && (
          <button 
            onClick={handleStop} 
            aria-label="Stop Speaking"
            className="stop-button" 
          >
            Stop
          </button>
        )}
        </div>

        <button onClick={onClose} aria-label="Close Popup">Close</button>
      </div>
    </div>
  );
};

export default Popup;


