import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandPage/LandingPage';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
       <NavBar/>
      <div className = 'overlay'></div>
      <div className= 'landingImage'></div>
      <div className="container">
       
        <LandingPage />
        <Resume />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
