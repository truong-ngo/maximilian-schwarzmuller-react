import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./AddUser.css";

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value
    if (
      enteredUsername.trim().length == 0 &&
      enteredAge.trim().length == 0
    ) {
      props.onAlertErr({title: "Invalid input!", message: "Please enter a valid name and age (non-empty values)!"})
      return;
    }
    if (enteredUsername.trim().length == 0) {
      props.onAlertErr({title: "Invalid input!", message: "Please enter a valid name (non-empty values)!"})
      return
    }
    if (+enteredAge < 1) {
      props.onAlertErr({title: "Invalid age!", message: "Please enter a valid age (age > 0)!"})
      return;
    }
    const enteredUser = {id: Math.random().toString(), username: enteredUsername.trim(), age: +enteredAge.trim()};
    props.onAddUser(enteredUser)
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
