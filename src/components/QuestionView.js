import React from "react";
import { handleAddAnswer } from "../actions/questions";
import QuestionCard from "./QuestionCard";
import AnsweredQuestion from "./AnsweredQuestion";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

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

const QuestionView = ({ dispatch, users, question, authedUser }) => {
  const classes = useStyles();
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author } = question;
  const avatarURL = users[author].avatarURL;
  const handleAnswer = (e, option) => {
    e.preventDefault();
    dispatch(handleAddAnswer(authedUser, question.id, option));
  };

  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const isAnswered =
    optionOne.votes.includes(authedUser) ||
    optionTwo.votes.includes(authedUser);

  if (isAnswered) {
    return (
      <>
        <AnsweredQuestion id={question.id} />
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h6 style={{ textAlign: "center" }}>Question provided by {author}</h6>
          <Avatar src={avatarURL} alt="user avatar" />
        </div>
      </>
    );
  }
  return (
    <>
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
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <h6 style={{ textAlign: "center" }}>Question provided by {author}</h6>
        <Avatar src={avatarURL} alt="user avatar" />
      </div>
    </>
  );
};

const mapStateToProps = ({ users, questions, authedUser }, { id }) => {
  const question = questions[id];
  return { users, question: question ? question : null, authedUser };
};

export default connect(mapStateToProps)(QuestionView);
