import "./App.css";
import LoginPage from "./components/LoginPage";
import { connect } from "react-redux";
import React, {useEffect} from "react";
import { handleInitialData } from "./actions/shared";

function App(props) {
  
  useEffect(() =>
    props.dispatch(handleInitialData())
  );
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default connect()(App);
