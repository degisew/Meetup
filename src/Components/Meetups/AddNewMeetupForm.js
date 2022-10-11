import React, { useState } from "react";
import classes from "./AddNewMeetupForm.module.css";
import Card from "../UI/Card";
const AddNewMeetupForm = () => {
  const [value, setNewValue] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
  });
  const onChangeHandler = (e) => {
    setNewValue({
        ...value, // or here we can spread the prevState if we have it.
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    setNewValue({
      title: "",
      image: "",
      address: "",
      description: "",
    });
  };
  return (
    <Card>
      <form action="#" className={classes.form} onSubmit={onSubmitHandler}>
        <h1>Add New Meetup</h1>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            value={value.title}
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
            value={value.image}
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
            value={value.address}
            required
            id="address"
            name="address"
            onChange={onChangeHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            type="text"
            value={value.description}
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
