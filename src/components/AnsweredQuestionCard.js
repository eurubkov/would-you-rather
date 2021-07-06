import { React } from "react";
import { Typography } from "@material-ui/core";
import QuestionCard from "./QuestionCard";

const AnsweredQuestionCard = ({
  questionText,
  votesCount,
  votesPercentage,
}) => {
  return (
    <QuestionCard questionText={questionText}>
      <Typography color="textSecondary">
          {votesCount} ({votesPercentage}%) people voted for this option
        </Typography>
    </QuestionCard>
  );
};

export default AnsweredQuestionCard;
