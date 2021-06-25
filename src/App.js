import "./App.css";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { handleInitialData } from "./actions/shared";
import AddQuestion from "./components/AddQuestion";

function App(props) {
  
  useEffect(() =>
    props.dispatch(handleInitialData())
  );
  return (
    <div>
      <AddQuestion />
    </div>
  );
}

export default connect()(App);
