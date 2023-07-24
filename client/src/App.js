import './css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './screens/SafinaPages/landingpage';
import Sermons from './screens/SafinaPages/sermons';
import Giving from './screens/SafinaPages/giving';
import Events from './screens/SafinaPages/events';
import Podcast from './screens/SafinaPages/podcast';
import Signup from './screens/SafinaPages/signup';
import Login from './screens/SafinaPages/login';
import Squads from './screens/SafinaPages/squads';

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
