import React from "react";
import classes from "./AddNewMeetupForm.module.css";
import Card from "../UI/Card";
const AddNewMeetupForm = (props) => {
  const onSubmitHandler = (e) => {
    props.onSubmitHandler(e);
  };
  const onChangeHandler = (e) => {
    props.onChangeHandler(e);
  };
  return (
    <Card>
      <form action="#" className={classes.form} onSubmit={onSubmitHandler}>
        <h1>Add New Meetup</h1>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            value={props.value.title}
            required
            id="title"
            name="title"
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            value={props.value.image}
            required
            id="image"
            name="image"
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            value={props.value.address}
            required
            id="address"
            name="address"
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Date & Time</label>
          <input
            type="text"
            value={props.value.dateTime}
            required
            id="dateTime"
            name="dateTime"
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="text"
            value={props.value.description}
            required
            id="description"
            rows="5"
            name="description"
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default AddNewMeetupForm;
