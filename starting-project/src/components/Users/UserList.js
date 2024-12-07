import { useState } from "react";
import "./UserList.css";
import Card from "../UI/Card";

const UserList = (props) => {
  let renderEl = <p>Users is empty</p>
  if (props.users.length > 0) {
    renderEl = props.users.map(item => <li key={item.id}>{`${item.username} (${item.age} year old)`}</li>)
  }

  return <Card className="users">
    <ul>{renderEl}</ul>
  </Card>;
};

export default UserList;
