import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

const LoginPage = ({ authedUser, users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(selectedUser));
  };

  const handleChange = (e) => setSelectedUser(e.target.value);
  if (authedUser) return <Redirect to="/" />;
  else 
  return (
    <form onSubmit={handleLogin}>
      <select value={selectedUser} onChange={handleChange}>
        <option value="none" key="none"></option>
        {Object.values(users).map((user) => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input type="submit" value="submit" />
    </form>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return { users, authedUser };
};

export default connect(mapStateToProps)(LoginPage);
