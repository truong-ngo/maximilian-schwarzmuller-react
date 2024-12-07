import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";
import ErrorModal from "./components/UI/ErrorModal";
import Wrapper from "./components/Helper/Wrapper";

function App() {
  const [users, setUsers] = useState([
    { id: "random", username: "Truong", age: 30 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMess, setModalMess] = useState({})

  const addUserHandler = (user) => {
    setUsers(prevState => [user, ...prevState]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openModal = (data) => {
    setIsModalOpen(true)
    setModalMess(data)
  }

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} onAlertErr={openModal}/>
      <UserList users={users}/>
      <ErrorModal onCloseBtnClick={closeModal} visible={isModalOpen} title={modalMess.title} message={modalMess.message}/>
    </Wrapper>
  );
}

export default App;
