import "./App.css";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import React, { useEffect, Fragment } from "react";
import { handleInitialData } from "./actions/shared";
import AddQuestion from "./components/AddQuestion";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Leaderboard from "./components/Leaderboard";
import HomePage from "./components/HomePage";
import QuestionPage from "./components/QuestionPage";

function App(props) {
  useEffect(() => props.dispatch(handleInitialData()));
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route
          path="/"
          exact
          render={() =>
            props.authedUser ? <HomePage /> : <Redirect to="/login" />
          }
        />
        <Route path="/login" component={LoginPage} />
        <Route
          path="/add"
          render={() =>
            props.authedUser ? <AddQuestion /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/leaderboard"
          render={() =>
            props.authedUser ? <Leaderboard /> : <Redirect to="/login" />
          }
        />
        <Route path="/questions/:id" component={QuestionPage} />
      </Fragment>
    </Router>
  );
}
const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};
export default connect(mapStateToProps)(App);
