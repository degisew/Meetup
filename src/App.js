import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import AddMeetup from "./Pages/AddMeetup";
import AllMeetups from "./Components/Meetups/AllMeetups";
function App() {
  const Meetups_Data = [];
  const [value, setNewValue] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
  });
  const onChangeHandler = (e) => {
    setNewValue({
      ...value, // or here we can spread the prevState if we have it.
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
     const url = "https://meetup-a1681-default-rtdb.firebaseio.com/meetups.json";
     fetch(url, {
       method: "POST",
       body: JSON.stringify(value),
       'Content-Type': 'application/json'
     });
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllMeetups Dummy_Data={Meetups_Data} />} />
        <Route
          path="/Add"
          element={
            <AddMeetup
              onChangeHandler={onChangeHandler}
              value={value}
              onSubmitHandler={onSubmitHandler}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
