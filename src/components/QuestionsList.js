import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";
import UnansweredQuestion from "./UnansweredQuestion";
import { Button } from "@material-ui/core";
import { Redirect } from "react-router-dom";

const QuestionsList = ({ authedUserData, questions }) => {
  const [viewingAnswered, setViewingAnswered] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [addQuestion, setAddQuestion] = useState(false);

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

  const redirectToAddQuestion = () => {
    setAddQuestion(true);
  };

  if (addQuestion) {
    return <Redirect to="/add" />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Would You Rather?</h1>
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
      {!viewingAnswered && unansweredQuestions.length === 0 && (
        <>
          <h3 style={{ textAlign: "center" }}>
            Looks like you answered all the questions!
          </h3>
          <Button
            variant="outlined"
            color="primary"
            style={{
              display: "block",
              margin: "auto",
            }}
            onClick={redirectToAddQuestion}
          >
            <h4>Create a new one?</h4>
          </Button>
        </>
      )}
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
  const authedUserData = users[authedUser];
  return { authedUserData: authedUserData ? authedUserData : null, questions };
};

export default connect(mapStateToProps)(QuestionsList);
