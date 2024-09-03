import React, { useState } from 'react';
import './Queries.css';

const faqs = [
    {
      question: " Who can benefit from this website ? ",
      answer: " Individuals with little or no knowledge of the Constitution, law professionals, students, those needing multilingual support, people seeking affordable legal solutions, and disabled individuals. "
    },
    {
      question: " How does it help those unfamiliar with the Constitution?",
      answer: " The chatbot simplifies legal terms, making complex concepts easy to understand."
    },
    {
      question: "What legal solutions are offered?",
      answer: "Basic, affordable legal guidance to help reduce financial barriers."
    },
  
  {
      question: "What accessibility features are available for disabled users? ",
      answer: "Text-to-speech and voice assistant features for visually impaired users. "
    },
    {
        question: " ⁠How accurate is the chatbot information?",
        answer: "The chatbot is trained using the Constitution, ensuring reliable information."
      },
      {
        question: "⁠Is there a cost to use the website?",
        answer: " Basic features are free; some advanced solutions may require some fee"
      },
    
    ];

const Query = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="query-section">
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Query;

