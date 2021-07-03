import React, { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const AddQuestion = ({ dispatch, authedUser }) => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [questionAdded, setQuestionAdded] = useState(false);
  authedUser = "sarahedo";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(option1, option2, authedUser));
    setQuestionAdded(true);
  };
  if (questionAdded) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <h3>Would You Rather</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          name="question1"
          placeholder="Question 1"
          onChange={(e) => setOption1(e.target.value)}
          value={option1}
          required
        />
        <span>
          <b>OR</b>
        </span>
        <textarea
          name="question2"
          placeholder="Question 2"
          onChange={(e) => setOption2(e.target.value)}
          value={option2}
          required
        />
        <span>
          <b>?</b>
        </span>
        <br></br>
        <input type="submit" value="Ask" />
      </form>
    </>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(AddQuestion);
