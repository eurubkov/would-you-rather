import { React } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "250px",
    minHeight: "200px",
  },
});

const AnsweredQuestionCard = ({
  questionText,
  votesCount,
  votesPercentage,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {questionText}
        </Typography>
        <Typography color="textSecondary">
          {votesCount} ({votesPercentage}%) people voted for this option
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AnsweredQuestionCard;
