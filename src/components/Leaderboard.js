import React from "react";
import LeaderboardUser from "./LeaderboardUser";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Leaderboard = ({ users }) => {
  const sortedUsers = Object.keys(users)
    .map((userId) => {
      const user = JSON.parse(JSON.stringify(users[userId]));
      user["totalQuestions"] =
        user["questions"].length + Object.keys(user["answers"]).length;
      return user;
    })
    .sort((a, b) => b["totalQuestions"] - a["totalQuestions"]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Asked</TableCell>
              <TableCell>Answered</TableCell>
              <TableCell>Total Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.map((user) => (
              <LeaderboardUser key={user["id"]} user={user} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = ({ users }) => {
  return { users };
};
export default connect(mapStateToProps)(Leaderboard);
