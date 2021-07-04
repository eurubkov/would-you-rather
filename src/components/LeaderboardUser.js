import { React } from "react";

const LeaderboardUser = ({ user }) => {
  return (
    <div>
      <h5>{user["name"]}</h5>
      <h5>Questions Asked: {user["questions"].length}</h5>
      <h5>Questions Answered: {Object.keys(user["answers"]).length}</h5>
    </div>
  );
};

export default LeaderboardUser;
