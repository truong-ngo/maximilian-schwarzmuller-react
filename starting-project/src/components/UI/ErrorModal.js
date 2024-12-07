import Button from "./Button";
import Card from "./Card";
import "./ErrorModal.css";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  const onClick = () => {
    props.onClick();
  };
  
  return <div onClick={onClick} className={`backdrop ${props.visible ? "" : "hide"}`} />;
};

const Modal = (props) => {
  const onCloseBtnClick = () => {
    props.onCloseBtnClick();
  };

  return (
    <Card className={`modal ${props.visible ? "" : "hide"}`}>
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={onCloseBtnClick}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const closeModal = () => {
    props.onCloseBtnClick();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={closeModal} visible={props.visible}></Backdrop>, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<Modal
        onCloseBtnClick={closeModal}
        visible={props.visible}
        title={props.title}
        message={props.message}
      ></Modal>, document.getElementById("modal-root"))}
    </React.Fragment>
  );
};

export default ErrorModal;
