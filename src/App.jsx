import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import MoodPage from './MoodPage';
import HistoryPage from './HistoryPage';


const data = JSON.parse(localStorage.getItem('catData')) || [];

function App() {

  const [catMoodData, setCatMoodData] = useState(data);  //[{mood1, note1, date1}, {mood2, note2, date2}]

  const addNewData = (mood, note, date) =>{

    setCatMoodData((prevCatData)=>{
      return [...prevCatData, {mood: mood, note: note, date: date}]
    })
  }

  localStorage.setItem('catData', JSON.stringify(catMoodData));

  

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MoodPage" element={<MoodPage changeData={addNewData} />} />
          <Route path="/HistoryPage" element={<HistoryPage catData={catMoodData} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
