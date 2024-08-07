import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MoodPage from './MoodPage';
import TrackPage from "./TrackPage";

import './App.css'


const data = JSON.parse(localStorage.getItem('catData')) || [];

function App() {

  const [catMoodData, setCatMoodData] = useState(data);  //[{mood1, note1, date1}, {mood2, note2, date2}]

  const addNewData = (mood, note, date, num) => {

    setCatMoodData((prevCatData) => {
      return [...prevCatData, { id: crypto.randomUUID(), mood: mood, note: note, date: date, moodNum: num }]
    })
  }

  const deleteData = (id) => {
    setCatMoodData((prevCatData) => {
      return prevCatData.filter(data => data.id != id);
    })
  }

  localStorage.setItem('catData', JSON.stringify(catMoodData));

  const clearAll = () => {
    localStorage.clear();
    setCatMoodData([]);
  }

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MoodPage" element={<MoodPage changeData={addNewData} />} />
          <Route path="/TrackPage" element={<TrackPage catData={catMoodData} deleteData={deleteData} clearAll={clearAll} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
