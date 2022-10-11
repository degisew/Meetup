import React from "react";
import classes from "./AddNewMeetupForm.module.css";
import Card from "../UI/Card";
const AddNewMeetupForm = () => {
  return (
    <Card>
      <form action="#" className={classes.form}>
        <h1>Add New Meetup</h1>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea type="text" required id="description" rows="5" />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default AddNewMeetupForm;
