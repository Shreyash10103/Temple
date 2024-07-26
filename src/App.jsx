// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Heading from './components/Heading.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import DurgaPuja from './components/DurgaPuja.jsx'; // Import the new component
import JagannathRathYatra from './components/JagannathRathYatra.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Heading />
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Durga Puja" element={<DurgaPuja />} /> {/* Add this route */}
            <Route path="/Rath Yatra" element={<JagannathRathYatra />} /> {/* Add this route */}

          </Routes>
        </div>
        <br /><br /><br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
