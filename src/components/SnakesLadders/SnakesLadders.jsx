import React from 'react';
import './SnakesLadders.css';
import snakesLaddersImage from '../../assets/snakes and ladder.png'; 

const SnakesLadders = () => {
  return (
    <section id="snakes-ladders" className="snakes-ladders-section">
      <h2>Snakes and Ladders</h2>
      <div className="snakes-ladders-content">
        <img src={snakesLaddersImage} alt="Snakes and Ladders" className="snakes-ladders-image" />
        <button className="play-button">Play Now</button>
      </div>
    </section>
  );
};

export default SnakesLadders;

/*import React from 'react';
import './SnakesLadders.css';
import snakesLaddersImage from '../../assets/snakes and ladder.png'; 

const SnakesLadders = () => {
  return (
    <section id="snakes-ladders" className="snakes-ladders-section">
      <h2>Snakes and Ladders</h2>
      <div className="snakes-ladders-content">
        <img src={snakesLaddersImage} alt="Snakes and Ladders" className="snakes-ladders-image" />
        <a 
          href="/Snakes-and-Ladders-Game-using-JavaScript-HTML-and-CSS/index.html" 
          className="play-button" 
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          Play Now
        </a>
      </div>
    </section>
  );
};

export default SnakesLadders; */