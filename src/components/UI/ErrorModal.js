import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// Cut it out of ErrorModal to make it easier to work with portals
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onErrorHandler} />;
};

// Cut it out of ErrorModal to make it easier to work with portals
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onErrorHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    // To make sure we can't interact with the rest of the page - add the div with .backdrop:
    <React.Fragment>
      {/* Using react-dom, createPortal method takes 2 arguments: node that needs to be rendered and  */}
      {/* Portals the Backdrop component to the targeted id */}
      {ReactDOM.createPortal(
        <Backdrop onErrorHandler={props.onErrorHandler} />,
        document.getElementById("backdrop-root")
      )}
      {/* Portals the ModalOverlay component to the targeted id */}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onErrorHandler={props.onErrorHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
