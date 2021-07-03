import React from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";

const UnansweredQuestion = ({ dispatch, authedUser, question }) => {
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author, id } = question;
  authedUser = "johndoe";
  const handleAnswer = (e, option) => {
    e.preventDefault();
    dispatch(handleAddAnswer(authedUser, id, option));
  };

  return (
    <>
      <h1>Would You Rather?</h1>
      <h6>Question provided by {author}</h6>
      <div>
        <span onClick={(e) => handleAnswer(e, "optionOne")}>
          {optionOne.text}
        </span>
        <span>
          <h1>OR</h1>
        </span>
        <span onClick={(e) => handleAnswer(e, "optionTwo")}>
          {optionTwo.text}
        </span>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];
  return { authedUser, question: question ? question : null };
};

export default connect(mapStateToProps)(UnansweredQuestion);
