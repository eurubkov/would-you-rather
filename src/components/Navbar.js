import React from "react";
import { connect } from "react-redux";
import { logoutAuthedUser } from "../actions/authedUser";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ dispatch, authedUser, avatarURL }) => {
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

          {authedUser ? (
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <></>
          )}
          {authedUser ? (
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                textAlign: "center",
                right: "0px",
                position: "absolute",
              }}
            >
              Hello, {authedUser}!
              <Avatar src={avatarURL} alt="user avatar" />
            </div>
          ) : (
            <></>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  const user = users[authedUser];
  return { authedUser, avatarURL: user?.avatarURL };
};

export default connect(mapStateToProps)(NavBar);
