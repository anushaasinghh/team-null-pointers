/* import React, { useState, useEffect } from 'react';
import './NewPage.css'; 

const NewPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/content.txt')
      .then(response => response.text())
      .then(data => setContent(data))
      .catch(error => console.error('Error fetching content:', error));
  }, []);

  return (
    <div className='new-page'>
      <h2>Constitution Content</h2>
      <div className='content'>
      <p>{content}</p>
      </div>
      <button className='simplify-button' onClick={() => alert('Simplify this functionality is under construction.')}>
        Simplify This
      </button>
    </div>
  );
};

export default NewPage; */
