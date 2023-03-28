import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <article className={classes.article}>
      <div className={classes.image} />
      <div className={classes["hero-logo"]}>
        <div className={classes.line}></div>
        <div className={classes.title}>DOST HUKUK BÜROSU</div>
        <div className={classes.line}></div>
      </div>
    </article>
  );
};

export default Home;
