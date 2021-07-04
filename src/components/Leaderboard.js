import React from "react";
import LeaderboardUser from "./LeaderboardUser";
import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  const sortedUsers = Object.keys(users)
    .map((userId) => {
      users[userId]["totalQuestions"] =
        users[userId]["questions"].length +
        Object.keys(users[userId]["answers"]).length;
      return users[userId];
    })
    .sort((a, b) => a["totalQuestions"] - b["totalQuestions"]);
  return (
    <div>
      {sortedUsers.map((user) => (
        <LeaderboardUser key={user["id"]} user={user} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};
export default connect(mapStateToProps)(Leaderboard);
