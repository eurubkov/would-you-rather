import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import { Button } from "@material-ui/core";

const QuestionsList = ({ authedUserData, questions }) => {
  const [viewingAnswered, setViewingAnswered] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  useEffect(() => {
    let answered = [];
    let unanswered = [];
    for (let questionId of Object.keys(questions)) {
      if (authedUserData.answers[questionId]) {
        answered.push(questions[questionId]);
      } else {
        unanswered.push(questions[questionId]);
      }
    }
    setAnsweredQuestions(answered);
    setUnansweredQuestions(unanswered);
  }, [questions, authedUserData?.answers]);

  const toogleViewingAnswered = () => {
    setViewingAnswered(!viewingAnswered);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Questions List</h1>
      <Button
         variant="outlined"
        color="primary"
        style={{
          display: "block",
          margin: "auto",
        }}
        onClick={toogleViewingAnswered}
      >
        {viewingAnswered ? "View Unanswered" : "View Answered"}
      </Button>
      <h1 style={{ textAlign: "center" }}>Would You Rather?</h1>
      {viewingAnswered &&
        answeredQuestions.map((question) => (
          <AnsweredQuestion key={question.id} id={question.id} />
        ))}
      {!viewingAnswered &&
        unansweredQuestions.map((question) => (
          <UnansweredQuestion key={question.id} id={question.id} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  authedUser = "johndoe";
  const authedUserData = users[authedUser];
  return { authedUserData: authedUserData ? authedUserData : null, questions };
};

export default connect(mapStateToProps)(QuestionsList);
