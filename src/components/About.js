import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <article className={classes.article}>
      <div className={classes.hero}>
        <h1>HAKKIMIZDA</h1>
      </div>
      <blockquote className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </blockquote>
    </article>
  );
};

export default About;
