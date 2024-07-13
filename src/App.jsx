import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MoodPage from './MoodPage';
import HistoryPage from './HistoryPage';




function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MoodPage" element={<MoodPage />} />
          <Route path="/HistoryPage" element={<HistoryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
