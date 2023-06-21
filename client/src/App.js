import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from '../src/screens/landingpage';
import Sermons from '../src/screens/sermons';
import Giving from '../src/screens/giving';
import Events from '../src/screens/events';
import Contact from '../src/screens/contact';
// import Navbar from './components/navbar';
import Squads from './screens/squads';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Sermons" element={<Sermons />} />
          <Route path="/Giving" element={<Giving />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Squads />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
