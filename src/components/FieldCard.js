import React from "react";
import Card from "../UI/Card";
import classes from "./FieldCard.module.css";

const FieldCard = (props) => {
  return (
    <Card>
      <div className={classes.container}>
        <img src={props.image} alt="Field" />

        <blockquote>
          <h3>{props.title}</h3>
          {props.text}
        </blockquote>
      </div>
    </Card>
  );
};

export default FieldCard;
