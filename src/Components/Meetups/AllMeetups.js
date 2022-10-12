import React from 'react'
import Home from '../../Pages/Home';

const AllMeetups = (props) => {
   
  return (
    <>
      <Home meetups={props.Dummy_Data}/>
    </>
  )
}

export default AllMeetups;
