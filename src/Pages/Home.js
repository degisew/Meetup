import React from "react";
import MeetupItem from "../Components/MeetupItem";
function Home() {
  const Dummy_Data = [
    {
      id: 1,
      title: "first meetup",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.QnicPVgJeGdKJls9wnMHIAHaE8&pid=Api&P=0",
      dateTime: "Sep 28,2022 10:00 pm",
      timeZone: "EAT",
      address: "Addis Ababa, Ethiopia",
      description: "",
    },
    {
      id: 2,
      title: "second meetup",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.22KaYB9vpEbrH5tOJ5-qsQHaE8&pid=Api&P=0",
      dateTime: "Jan 8,2023 4:00 am",
      timeZone: "EAT",
      address: "Johannesburg, South Africa",
      description: "",
    },
    {
      id: 2,
      title: "third meetup",
      image:
        "https://africa-facts.org/wp-content/uploads/2017/10/8.-Nairobi-Kenya.jpg",
      dateTime: "Dec 24,2022 3:00 pm",
      timeZone: "EAT",
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
    <div>
      <MeetupItem data={Dummy_Data}/>
      <footer>
        <div style={style}>
            &copy;&nbsp;2022 Degisew Mengist. All rights are Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
