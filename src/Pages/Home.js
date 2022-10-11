import React from "react";
import MeetupItem from "../Components/MeetupItem";
import Layout from "../Components/Layout/Layout";
function Home() {
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
      id: 2,
      title: "Third Meetup",
      image:
        "https://africa-facts.org/wp-content/uploads/2017/10/8.-Nairobi-Kenya.jpg",
      dateTime: "Dec 24,2022 3:00 pm",
      timeZone: "UTC+3",
      address: "Nairobi, Kenya",
      description: "",
    },
  ];
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70px",
    backgroundColor: 'black',
    color: 'white',
  }
  return (
    <Layout>
      <h1>All Meetups</h1>
      <MeetupItem data={Dummy_Data}/>
      <footer>
        <div style={style}>
            &copy;&nbsp;2022 Degisew Mengist. All rights are Reserved.
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
