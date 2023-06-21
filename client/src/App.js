import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landingpage from '../src/screens/landingpage';
import Sermons from '../src/screens/sermons';
import Giving from '../src/screens/giving';
import Events from '../src/screens/events';
import Contact from '../src/screens/contact';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Sermons" element={<Sermons />} />
          <Route path="/Giving" element={<Giving />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
