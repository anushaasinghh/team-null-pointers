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


import React, { useState } from 'react';
import './Popup.css'; 
import { getOpenAIResponse } from './openai'; // Ensure correct import path

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

export default Popup;
