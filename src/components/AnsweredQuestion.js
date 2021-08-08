import { React } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AnsweredQuestionCard from "./AnsweredQuestionCard";
import AuthorSignature from "./AuthorSignature";

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

const AnsweredQuestion = ({ dispatch, authedUser, question }) => {
  const classes = useStyles();
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author } = question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercentage = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercentage = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );

  return (
    <>
      <div className={classes.container}>
        <AnsweredQuestionCard
          questionText={optionOne.text}
          votesCount={optionOne.votes.length}
          votesPercentage={optionOnePercentage}
        />

        <h1 style={{ marginLeft: "10px", marginRight: "10px" }}>OR</h1>
        <AnsweredQuestionCard
          questionText={optionTwo.text}
          votesCount={optionTwo.votes.length}
          votesPercentage={optionTwoPercentage}
        />
      </div>
      <AuthorSignature author={author} />
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];
  return { authedUser, question: question ? question : null };
};
export default connect(mapStateToProps)(AnsweredQuestion);
