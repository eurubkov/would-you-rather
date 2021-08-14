import React from "react";
import { useParams, Link } from "react-router-dom";
import QuestionView from "./QuestionView";
import Button from "@material-ui/core/Button";

const QuestionPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Would You Rather</h1>
      <QuestionView id={id} />
      <Link to={`/`}>
        <Button
          style={{ display: "block", margin: "auto" }}
          variant="contained"
          color="secondary"
        >
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default QuestionPage;
