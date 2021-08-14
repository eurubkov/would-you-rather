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
import { useLocation, Switch } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

function App(props) {
  useEffect(() => props.dispatch(handleInitialData()));
  const RedirectToLogin = () => {
    const location = useLocation();
    return (
      <Redirect
        to={{ pathname: "/login", state: { from: location.pathname } }}
      />
    );
  };

  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={() =>
              props.authedUser ? <HomePage /> : <RedirectToLogin />
            }
          />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/add"
            render={() =>
              props.authedUser ? <AddQuestion /> : <RedirectToLogin />
            }
          />
          <Route
            path="/leaderboard"
            render={() =>
              props.authedUser ? <Leaderboard /> : <RedirectToLogin />
            }
          />
          <Route
            path="/questions/:id"
            render={() =>
              props.authedUser ? <QuestionPage /> : <RedirectToLogin />
            }
          />
          <Route
            render={() =>
              props.authedUser ? <NotFoundPage /> : <RedirectToLogin />
            }
          />
        </Switch>
      </Fragment>
    </Router>
  );
}
const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};
export default connect(mapStateToProps)(App);
