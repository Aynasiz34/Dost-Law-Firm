import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationDropdown.module.css";

const NavigationDropdown = () => {
  return (
    <div className={classes.dropdown}>
      <ul className={classes.list}>
        <li>
          <NavLink>Av. Mustafa Kürşad GÜMÜŞKEMER</NavLink>
        </li>
        <li>
          <NavLink>Av. Fatih Sultan Mehmet Han ÖKSÜZ</NavLink>
        </li>
        <li>
          <NavLink>Av. Halil İbrahim BOĞAR</NavLink>
        </li>
        <li>
          <NavLink>Av Murat ...</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavigationDropdown;
