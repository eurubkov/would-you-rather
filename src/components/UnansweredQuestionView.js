import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import QuestionCard from "./QuestionCard";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

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

const UnansweredQuestionView = ({ dispatch }) => {
  const classes = useStyles();
  const { id } = useParams();
  const question = useSelector((state) => state.questions[id]);
  const authedUser = useSelector((state) => state.authedUser);
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author } = question;
  const handleAnswer = (e, option) => {
    e.preventDefault();
    dispatch(handleAddAnswer(authedUser, id, option));
  };

  return (
    <>
      <h6 style={{ textAlign: "center" }}>Question provided by {author}</h6>
      <div className={classes.container}>
        <QuestionCard questionText={optionOne.text}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleAnswer(e, "optionOne")}
          >
            Answer
          </Button>
        </QuestionCard>
        <h1 style={{ marginLeft: "10px", marginRight: "10px" }}>OR</h1>
        <QuestionCard questionText={optionTwo.text}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleAnswer(e, "optionTwo")}
          >
            Answer
          </Button>
        </QuestionCard>
      </div>
    </>
  );
};

export default connect()(UnansweredQuestionView);
