import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import QuestionCard from "./QuestionCard";
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

const UnansweredQuestion = ({ dispatch, authedUser, question }) => {
  const classes = useStyles();
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author, id } = question;

  return (
    <>
      <h6 style={{ textAlign: "center" }}>Question provided by {author}</h6>
      <div className={classes.container}>
        <QuestionCard questionText={optionOne.text} />
        <h1 style={{ marginLeft: "10px", marginRight: "10px" }}>OR</h1>
        <QuestionCard questionText={optionTwo.text} />
      </div>
      <Link to={`/questions/${id}`}>
        <Button
          style={{ display: "block", margin: "auto" }}
          variant="contained"
          color="primary"
        >
          Answer
        </Button>
      </Link>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];
  return { authedUser, question: question ? question : null };
};

export default withRouter(connect(mapStateToProps)(UnansweredQuestion));
