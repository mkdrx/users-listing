import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  // So it outputs the content from whatever is inside Card, we use props.children
  // Using CSS modules, makes that class unique to this component
  return (
    // Added props.className so not just the Card gets styled: one style comes from CSS module, other comes potentially via props
    // so we merging an internally defined class and an external class
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
