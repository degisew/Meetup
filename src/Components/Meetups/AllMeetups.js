import React from 'react'
import Home from '../../Pages/Home';

const AllMeetups = (props) => {
 const favoritesHandler = (favoriteItem) => {
    props.favoritesHandler(favoriteItem);
   }
  return (
    <>
      <Home meetups={props.Dummy_Data} favoritesHandler={favoritesHandler}/>
    </>
  )
}

export default AllMeetups;
