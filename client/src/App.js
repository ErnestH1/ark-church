import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from '../src/screens/landingpage';
import Sermons from '../src/screens/sermons';
import Giving from '../src/screens/giving';
import Events from '../src/screens/events';
import Podcast from './screens/podcast';
import Signup from '../src/screens/signup';
import Login from './screens/login';
import Squads from './screens/squads';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/SERMONS" element={<Sermons />} />
          <Route path="/GIVING" element={<Giving />} />
          <Route path="/EVENTS" element={<Events />} />
          <Route path="/PODCAST" element={<Podcast />} />
          <Route path="/SQUADS" element={<Squads />} />
          <Route path="/LOGIN" element={<Login />} />
          <Route path="/SIGNUP" element={<Signup />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
