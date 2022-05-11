import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // Initialize Username State
  const [enteredUsername, setEnteredUsername] = useState("");

  // Initialize Age State
  const [enteredAge, setEnteredAge] = useState("");

  // Initialize Error State
  const [error, setError] = useState();

  // Submit handler
  const addUserHandler = (event) => {
    event.preventDefault();
    // Validations for inputs with ErrorModal set state in case not valid
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
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

  // Error handler - connecting to ErrorModal via onErrorHandler
  // that will make error modal disappear when clicking button or clicking backdrop
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {/* If error is true it will pop the ErrorModal component */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
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
    </React.Fragment>
  );
};

export default AddUser;
