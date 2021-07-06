import { React } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "250px",
    minHeight: "200px",
  },
});

const QuestionCard = ({ questionText, children }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {questionText}
        </Typography>
        {children}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
