import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Chat from './components/Chat/Chat';
import Queries from './components/Queries/Queries';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
//import NewPage from './components/NewPage/NewPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
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
