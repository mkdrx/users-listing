import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    // In case props.type is undefined it will be 'button' as fallback type
    // onClick with a handler function received via props
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {/* Be able to output content between the button tags, content gotten via props.children */}
      {props.children}
    </button>
  );
};

export default Button;
