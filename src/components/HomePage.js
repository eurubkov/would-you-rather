import { React } from "react";
import { connect } from "react-redux";
import QuestionsList from "./QuestionsList";

const HomePage = ({ user }) => {
  return (
    <div>
      <h6>Welcome, {user["name"]}</h6>
      <QuestionsList />
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return { user: users[authedUser] };
};
export default connect(mapStateToProps)(HomePage);
