import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Favorites from "./Pages/Favorites";
import About from "./Pages/About";
import AddMeetup from "./Pages/AddMeetup";
import AllMeetups from "./Components/Meetups/AllMeetups";
function App() {
  const [Meetups_Data, setMeetups_Data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://meetup-a1681-default-rtdb.firebaseio.com/meetups.json";

  const navigate = useNavigate();
  const [userFavorites, setUserFavorites] = useState([]);
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
   const favoritesHandler = (favoriteItem) => {
     const newState =   {
          title: favoriteItem.title,
          image: favoriteItem.image,
          address: favoriteItem.address,
          description: favoriteItem.description
        };
        userFavorites.push(newState);
     setUserFavorites((prevState) => {
      if(prevState) {
      prevState = userFavorites; 

      return prevState;
           
      
      }
    }

    );
      }
  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetch(url, {
      method: "POST",
      body: JSON.stringify(value),
      "Content-Type": "application/json",
    }).then(() => {
      navigate("/");
    });
  };

  useEffect(() => {
    fetch(url, {
      "Content-Type": "application/json",
    })
      .then((res) => res.json())
      .then((data) => {
        // Now we should transform the data from firebase into array. b/c
        // the firebase returns object not array but we need array.
        for (const key in data) {
          const returnedMeetup = {
            id: key,
            ...data[key],
          };
          Meetups_Data.push(returnedMeetup);
        }
        setIsLoading(false);
        setMeetups_Data((prevState) => {
          if (prevState) {
            prevState = Meetups_Data;

            return prevState;
          }
        });
      });
  }, [Meetups_Data]);
  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <AllMeetups
              Dummy_Data={Meetups_Data}
              favoritesHandler={favoritesHandler}
            />
          }
        />
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
        <Route path="/favorites" element={<Favorites userFavorites={userFavorites}/>} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
