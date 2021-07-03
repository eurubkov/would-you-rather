import "./App.css";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { handleInitialData } from "./actions/shared";
import AddQuestion from "./components/AddQuestion";
import UnansweredQuestion from "./components/UnansweredQuestion";
import AnsweredQuestion from "./components/AnsweredQuestion";
import QuestionsList from "./components/QuestionsList";

function App(props) {
  
  useEffect(() =>
    props.dispatch(handleInitialData())
  );
  return (
    <div>
      <QuestionsList />
    </div>
  );
}

export default connect()(App);
