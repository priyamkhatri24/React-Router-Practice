import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const nav = () => {
  return (
    <ul className="Nav">
      <li>
        <NavLink exact activeStyle={{ color: "orangered" }} to="/">
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "orangered" }} to="/users">
          Users
        </NavLink>
      </li>
    </ul>
  );
};

export default nav;
