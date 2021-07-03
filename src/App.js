import "./App.css";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { handleInitialData } from "./actions/shared";
import AddQuestion from "./components/AddQuestion";
import UnansweredQuestion from "./components/UnansweredQuestion";
import AnsweredQuestion from "./components/AnsweredQuestion";

function App(props) {
  
  useEffect(() =>
    props.dispatch(handleInitialData())
  );
  return (
    <div>
      <AnsweredQuestion id={"xj352vofupe1dqz9emx13r"} />
    </div>
  );
}

export default connect()(App);
