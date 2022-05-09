import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // Initialize the states of Username
  const [enteredUsername, setEnteredUsername] = useState("");

  // Initialize the states of Age
  const [enteredAge, setEnteredAge] = useState("");

  // Submit handler
  const addUserHandler = (event) => {
    event.preventDefault();
    // Validations for inputs
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    // When submitting, it passes up to App component the data of user (name and age)
    props.onAddUser(enteredUsername, enteredAge);

    // To clear the inputs after submitting - need to add value props set to ={enteredAgeUsername/Age} to the inputs in the form
    setEnteredUsername("");
    setEnteredAge("");
  };

  // Username input handler
  const usernameChangeHandler = (event) => {
    // To set the state to whatever the user input is
    setEnteredUsername(event.target.value);
  };

  // Age input handler
  const ageChangeHandler = (event) => {
    // To set the state to whatever the user input is
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (YEARS)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
