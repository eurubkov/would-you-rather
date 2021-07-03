import { React } from "react";
import { connect } from "react-redux";

const AnsweredQuestion = ({ dispatch, authedUser, question }) => {
  if (question === null) {
    return <p>This question doesn't exist.</p>;
  }
  const { optionOne, optionTwo, author, id } = question;
  authedUser = "johndoe";
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const optionOnePercentage = (optionOne.votes.length / totalVotes) * 100;
  const optionTwoPercentage = (optionTwo.votes.length / totalVotes) * 100;
  return (
    <>
      <h1>Would You Rather?</h1>
      <h6>Question provided by {author}</h6>
      <div>
        <span>
          <h4>{optionOne.text}</h4>
          <h1>{optionOne.votes.length}</h1>
          <h6>people voted for this option</h6>
          <h1>{optionOnePercentage}% of people</h1>
          <h5>voted for this option</h5>
        </span>
        <span>
          <h1>OR</h1>
        </span>
        <h4>{optionTwo.text}</h4>
        <h1>{optionTwo.votes.length}</h1>
        <h6>people voted for this option</h6>
        <h1>{optionTwoPercentage}% of people</h1>
        <h5>voted for this option</h5>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];
  return { authedUser, question: question ? question : null };
};
export default connect(mapStateToProps)(AnsweredQuestion);
