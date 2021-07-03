import "./App.css";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import React, { useEffect, Fragment } from "react";
import { handleInitialData } from "./actions/shared";
import AddQuestion from "./components/AddQuestion";
import UnansweredQuestion from "./components/UnansweredQuestion";
import AnsweredQuestion from "./components/AnsweredQuestion";
import QuestionsList from "./components/QuestionsList";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

function App(props) {
  
  useEffect(() =>
    props.dispatch(handleInitialData())
  );
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route
          path="/"
          exact
          render={() =>
            props.authedUser ? <QuestionsList /> : <Redirect to="/login" />
          }
        />
        <Route path="/login" component={LoginPage} />
        <Route
          path="/add"
          render={() =>
            props.authedUser ? <AddQuestion /> : <Redirect to="/login" />
          }
        />
      </Fragment>
    </Router>
  );
}
const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};
export default connect(mapStateToProps)(App);
