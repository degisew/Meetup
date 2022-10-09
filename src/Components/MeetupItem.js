import React from 'react'
import classes from './MeetupItem.module.css';
function MeetupItem(props) {
  return (
    <section>
      {props.data.map(meetup => {
        return (
          <div className={classes.mainContainer}>
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
              <p>
                {meetup.dateTime}, <b>{meetup.timeZone}</b>
              </p>
              <address>{meetup.address}</address>
            </div>
            <div className={classes.description}>{meetup.description}</div>
            <button type="button" className={classes.favBtn}>
              Add to Favorites
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default MeetupItem