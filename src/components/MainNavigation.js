import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes["icon-container"]}>
        <NavLink to="/" end>
          <Logo className={classes.icon} />
          <label>DOST HUKUK</label>
        </NavLink>
      </div>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            HAKKIMIZDA
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lawyers"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            EKİBİMİZ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fields"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            ÇALIŞMA ALANLARIMIZ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            İLETİŞİM
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
