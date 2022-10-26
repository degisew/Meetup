/* eslint-disable */
import React from 'react';
import MeetupItem from '../Components/Meetups/MeetupItem';
import Layout from '../Components/Layout/Layout';

function Home(props) {
  const favoritesHandler = (favoriteItem) => {
    props.favoritesHandler(favoriteItem);
  };
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70px',
    backgroundColor: 'black',
    color: 'white',
  };
  return (
    <Layout>
      <h1>All Meetups</h1>
      <MeetupItem
        data={props.meetups}
        favoritesHandler={favoritesHandler}
      />
      <footer>
        <div style={style}>
          &copy;&nbsp;2022 Degisew Mengist. All rights are Reserved.
        </div>
      </footer>
    </Layout>
  );
}

export default Home;
