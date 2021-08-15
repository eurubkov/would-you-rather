import React, { useState } from "react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

const AddQuestionTextField = (props) => (
  <TextField
    required
    variant="outlined"
    multiline
    rows={4}
    inputProps={{ maxLength: 150 }}
    {...props}
  />
);

const AddQuestion = ({ dispatch, authedUser }) => {
  const classes = useStyles();
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [questionAdded, setQuestionAdded] = useState(false);

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
      <h3 style={{ textAlign: "center" }}>Would You Rather</h3>
      <form onSubmit={handleSubmit}>
        <div className={classes.container}>
          <AddQuestionTextField
            name="question"
            label="Question 1"
            onChange={(e) => setOption1(e.target.value)}
            value={option1}
          />
          <span>
            <b>OR</b>
          </span>
          <AddQuestionTextField
            name="question2"
            label="Question 2"
            onChange={(e) => setOption2(e.target.value)}
            value={option2}
          />
          <span>
            <b>?</b>
          </span>
        </div>
        <Button
          type="submit"
          style={{ display: "block", margin: "auto" }}
          variant="contained"
          color="primary"
        >
          Ask
        </Button>
      </form>
    </>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { authedUser };
};

export default connect(mapStateToProps)(AddQuestion);
