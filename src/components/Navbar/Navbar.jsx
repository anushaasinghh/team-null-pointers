import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Nyay_Mitra.png';
import logo2 from '../../assets/Nyay_Mitra__2_-removebg-preview.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setStep(1);
  };

  const handleChoice = (choice) => {
    setIsLogin(choice === 'login');
    setStep(2);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt='Logo' className="logo" />
          <img src={logo2} alt='Logo 2' className='logosecond' />
        </div>
        <ul className="nav-list">
          <li className="nav-item"><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li className="nav-item"><Link to='quiz-container' smooth={true} offset={0} duration={500}>Quiz</Link></li>
          <li className="nav-item"><Link to='chat-container' smooth={true} offset={0} duration={500}>Chat</Link></li>
          <li className="nav-item"><Link to='query-section' smooth={true} offset={0} duration={500}>Queries</Link></li>
          <li className="nav-item"><Link to='about' smooth={true} offset={-80} duration={500}>About</Link></li>
          <li className="nav-item"><Link to='contact' smooth={true} offset={0} duration={500}>Contact us</Link></li>
          <li className="nav-item">
            <div onClick={toggleModal} className="nav-button">Login/Sign-Up</div>
          </li>
        </ul>
      </nav>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal">
            <span className="close-btn" onClick={toggleModal}>&times;</span>
            {step === 1 ? (
              <>
                <h2>Choose an Option</h2>
                <button onClick={() => handleChoice('login')}>Login</button>
                <button onClick={() => handleChoice('signup')}>Sign Up</button>
              </>
            ) : (
              <>
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form>
                  {isLogin ? (
                    <>
                      <input type="text" placeholder="ID" required />
                      <input type="password" placeholder="Password" required />
                      <button type="submit">Login</button>
                    </>
                  ) : (
                    <>
                      <input type="tel" placeholder="Phone Number" required />
                      <input type="text" placeholder="Username" required />
                      <input type="password" placeholder="Create Password" required />
                      <button type="submit">Sign Up</button>
                    </>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

