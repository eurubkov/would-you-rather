import { React } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";

const LeaderboardUser = ({ user }) => {
  const asked = user.questions.length;
  const answered = Object.keys(user["answers"]).length;
  return (
    <TableRow key={user.name}>
      <TableCell component="th" scope="row">
        <Avatar src={user.avatarURL} alt="user avatar" />
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{asked}</TableCell>
      <TableCell>{answered}</TableCell>
      <TableCell>{asked + answered}</TableCell>
    </TableRow>
  );
};

export default LeaderboardUser;
