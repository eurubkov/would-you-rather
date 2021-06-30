import "./App.css";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { handleInitialData } from "./actions/shared";
import AddQuestion from "./components/AddQuestion";
import UnansweredQuestion from "./components/UnansweredQuestion";

function App(props) {
  
  useEffect(() =>
    props.dispatch(handleInitialData())
  );
  return (
    <div>
      <UnansweredQuestion id={"8xf0y6ziyjabvozdd253nd"} />
    </div>
  );
}

export default connect()(App);
