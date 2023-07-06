import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from '../src/screens/landingpage';
import Sermons from '../src/screens/sermons';
import Giving from '../src/screens/giving';
import Events from '../src/screens/events';
import Contact from '../src/screens/contact';
import Signup from '../src/screens/signup';
import Login from '../src/screens/login';
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
          <Route path="/squads" element={<Squads />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
