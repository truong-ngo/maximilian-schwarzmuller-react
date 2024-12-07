import { Fragment, useReducer } from "react";
import classes from "./Modal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const clickHandler = () => {
    props.onClick()
  }
    
  return (
    <div
      onClick={clickHandler}  
      className={`${classes.backdrop} ${props.hiden ? classes.hide : ""}`}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div>
      <div className={`${classes.modal} ${props.hiden ? classes.hide : ""}`}>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  const backdropClickHanlder = () => {
    props.onClick()
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hiden={props.hiden} onClick={backdropClickHanlder}></Backdrop>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay hiden={props.hiden}>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
