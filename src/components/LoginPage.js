import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  center: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  centerText: {
    textAlign: "center",
  },
}));

const LoginPage = ({ dispatch, authedUser, users, location }) => {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState("");
  const { from } = location?.state ?? "/";
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectedUser));
  };
  const handleChange = (e) => setSelectedUser(e.target.value);
  if (authedUser) return <Redirect to={from} />;
  else
    return (
      <div className={classes.center}>
        <h1 className={classes.centerText}>Login</h1>
        <FormControl className={classes.formControl}>
          <InputLabel id="username">Username</InputLabel>
          <Select value={selectedUser} onChange={handleChange}>
            <MenuItem value="" key="none"></MenuItem>
            {Object.values(users).map((user) => (
              <MenuItem value={user.id} key={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
          <Button
            variant="contained"
            color="primary"
            disabled={!selectedUser}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </FormControl>
      </div>
    );
};

const mapStateToProps = ({ users, authedUser }, { location }) => {
  return { users, authedUser, location };
};

export default connect(mapStateToProps)(LoginPage);
