import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Chat from './components/Chat/Chat';
import Queries from './components/Queries/Queries';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
//import NewPage from './components/NewPage/NewPage';
import Quiz from './components/Quiz/Quiz';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Quiz/>
      <Chat/>
     {/* <NewPage/> */}
      <Queries />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
