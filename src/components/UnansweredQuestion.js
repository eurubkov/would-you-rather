import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import QuestionCard from "./QuestionCard";
import Button from "@material-ui/core/Button";
import { withRouter, Link } from "react-router-dom";
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

const UnansweredQuestion = ({ dispatch, authedUser, question, users }) => {
  const classes = useStyles();
  console.log(authedUser);
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author, id } = question;
  const avatarURL = users[author].avatarURL;

  return (
    <>
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

const mapStateToProps = ({ authedUser, questions, users }, { id }) => {
  const question = questions[id];
  return {
    authedUser,
    question: question ? question : null,
    users,
  };
};

export default withRouter(connect(mapStateToProps)(UnansweredQuestion));
