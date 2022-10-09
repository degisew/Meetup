import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AddMeetup from "./Pages/AddMeetup";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Add" element={<AddMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
