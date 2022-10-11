import React from 'react'
import Home from '../../Pages/Home';

const AllMeetups = () => {
    const Dummy_Data = [
      {
        id: 1,
        title: "First Meetup",
        image:
          "https://www.ethiosports.com/wp-content/uploads/2018/12/Downtown.bmp",
        dateTime: "Sep 28,2022 10:00 pm",
        timeZone: "UTC+3",
        address: "Addis Ababa, Ethiopia",
        description: "",
      },
      {
        id: 2,
        title: "Second Meetup",
        image:
          "https://tse1.mm.bing.net/th?id=OIP.22KaYB9vpEbrH5tOJ5-qsQHaE8&pid=Api&P=0",
        dateTime: "Jan 8,2023 4:00 am",
        timeZone: "UTC+1",
        address: "Johannesburg, South Africa",
        description: "",
      },
      {
        id: 3,
        title: "Third Meetup",
        image:
          "https://africa-facts.org/wp-content/uploads/2017/10/8.-Nairobi-Kenya.jpg",
        dateTime: "Dec 24,2022 3:00 pm",
        timeZone: "UTC+3",
        address: "Nairobi, Kenya",
        description: "",
      },
    ];
  return (
    <>
      <Home meetups={Dummy_Data}/>
    </>
  )
}

export default AllMeetups;
