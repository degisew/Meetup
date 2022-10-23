import React from "react";
import Layout from "../Components/Layout/Layout";
import AddNewMeetupForm from "../Components/Meetups/AddNewMeetupForm";

function AddMeetup(props) {
  const onChangeHandler = (e) => {
    props.onChangeHandler(e);
  };
  const onSubmitHandler = (e) => {
    props.onSubmitHandler(e);
  };
  return (
    <Layout>
      <AddNewMeetupForm
        onChangeHandler={onChangeHandler}
        value={props.value}
        onSubmitHandler={onSubmitHandler}
      />
    </Layout>
  );
}

export default AddMeetup;
