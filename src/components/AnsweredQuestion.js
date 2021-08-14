import { React } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
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
  const { optionOne, optionTwo, author } = question;
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercentage = Math.round(
    (optionOne.votes.length / totalVotes) * 100
  );
  const optionTwoPercentage = Math.round(
    (optionTwo.votes.length / totalVotes) * 100
  );
  const userVotedOption1 = optionOne.votes.includes(authedUser);
  const userVotedOption2 = optionTwo.votes.includes(authedUser);

  return (
    <>
      <div className={classes.container}>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={"Your vote!"}
          invisible={!userVotedOption1}
          color="primary"
        >
          <AnsweredQuestionCard
            questionText={optionOne.text}
            votesCount={optionOne.votes.length}
            votesPercentage={optionOnePercentage}
          />
        </Badge>

        <h1 style={{ marginLeft: "10px", marginRight: "10px" }}>OR</h1>
        <Badge
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={"Your vote!"}
          invisible={!userVotedOption2}
          color="secondary"
        >
          <AnsweredQuestionCard
            questionText={optionTwo.text}
            votesCount={optionTwo.votes.length}
            votesPercentage={optionTwoPercentage}
          />
        </Badge>
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
