import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Mood from "./Mood";
import History from "./History";




function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mood" element={<Mood />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
