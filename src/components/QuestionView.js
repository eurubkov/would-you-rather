import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleAddAnswer } from "../actions/questions";
import QuestionCard from "./QuestionCard";
import AnsweredQuestion from "./AnsweredQuestion";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withRouter, Link } from "react-router-dom";

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

const QuestionView = ({ dispatch }) => {
  const classes = useStyles();
  const { id } = useParams();
  const question = useSelector((state) => state.questions[id]);
  const authedUser = useSelector((state) => state.authedUser);
  const { optionOne, optionTwo, author } = question;
  const [answered, setAnswered] = useState(
    question.author in question.optionOne.votes ||
      question.author in question.optionTwo.votes
  );
  const handleAnswer = (e, option) => {
    e.preventDefault();
    dispatch(handleAddAnswer(authedUser, id, option));
    setAnswered(true);
  };

  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  if (answered) {
    return (
      <>
        <AnsweredQuestion id={id} />{" "}
        <Link to={`/`}>
          <Button
            style={{ display: "block", margin: "auto" }}
            variant="contained"
            color="secondary"
          >
            Go Back
          </Button>
        </Link>
      </>
    );
  }
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
      <Link to={`/`}>
        <Button
          style={{ display: "block", margin: "auto" }}
          variant="contained"
          color="secondary"
        >
          Go Back
        </Button>
      </Link>
    </>
  );
};

export default withRouter(connect()(QuestionView));
