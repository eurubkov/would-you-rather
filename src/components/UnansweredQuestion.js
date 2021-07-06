import React from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import { makeStyles } from "@material-ui/core/styles";
import QuestionCard from "./QuestionCard";

const useStyles = makeStyles({
  root: {
    maxWidth: "250px",
    minHeight: "200px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const UnansweredQuestion = ({ dispatch, authedUser, question }) => {
  const classes = useStyles();
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author, id } = question;
  const handleAnswer = (e, option) => {
    e.preventDefault();
    dispatch(handleAddAnswer(authedUser, id, option));
  };

  return (
    <>
      <div className={classes.container}>
        <QuestionCard
          onClick={(e) => handleAnswer(e, "optionOne")}
          questionText={optionOne.text}
        />
        <h1 style={{ marginLeft: "10px", marginRight: "10px" }}>OR</h1>
        <QuestionCard
          onClick={(e) => handleAnswer(e, "optionOne")}
          questionText={optionTwo.text}
        />
      </div>
      <h6 style={{ textAlign: "center" }}>Question provided by {author}</h6>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];
  return { authedUser, question: question ? question : null };
};

export default connect(mapStateToProps)(UnansweredQuestion);
