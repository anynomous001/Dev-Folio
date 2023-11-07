import React from "react";
import './index.css'
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home'
import Project from './routes/Project'
import About from './routes/About'


function App() {
  return (
    <div className="body" >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
