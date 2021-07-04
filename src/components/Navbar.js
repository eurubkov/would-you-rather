import React from "react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";

import { NavLink } from "react-router-dom";

const NavBar = ({ dispatch }) => {
  const onLogout = () => {
    dispatch(logoutAuthedUser());
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Question</NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </li>
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default connect()(NavBar);
