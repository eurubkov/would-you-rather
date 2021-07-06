import React from "react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ dispatch }) => {
  const classes = useStyles();
  const onLogout = () => {
    dispatch(logoutAuthedUser());
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={NavLink} to="/" color="inherit">
            Would you rather?
          </Button>
          <Button component={NavLink} to="/add" color="inherit">
            Add Question
          </Button>
          <Button component={NavLink} to="/leaderboard" color="inherit">
            Leaderboard
          </Button>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default connect()(NavBar);
