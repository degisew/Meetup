/* eslint-disable */
import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../UI/Card";

function MeetupItem(props) {
  const favoritesHandler = (favoriteItem) => {
    props.favoritesHandler(favoriteItem);
  };
  return (
    <Card>
      {props.data.map((meetup) => (
        <div className={classes.mainContainer} key={meetup.id}>
          <div>
            <img
              src={meetup.image}
              className={classes.image}
              alt="meetup.title"
            />
          </div>
          <div className={classes.title}>
            <h1>{meetup.title}</h1>
          </div>
          <div className={classes.address}>
            <p>{meetup.dateTime}</p>
            <address>{meetup.address}</address>
          </div>
          <div className={classes.description}>{meetup.description}</div>
          <button
            type="button"
            onClick={() => {
              favoritesHandler(meetup);
            }}
            className={classes.favBtn}
          >
            Add to Favorites
          </button>
        </div>
      ))}
    </Card>
  );
}

export default MeetupItem;
