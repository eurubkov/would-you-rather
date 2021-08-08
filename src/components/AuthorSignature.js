import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";

const AuthorSignature = ({ author, avatarURL }) => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <h6 style={{ textAlign: "center" }}>Question provided by {author}</h6>
      <Avatar src={avatarURL} alt="user avatar" />
    </div>
  );
};

const mapStateToProps = ({ users }, { author }) => {
  const user = users[author];
  return { author: user.id, avatarURL: user.avatarURL };
};

export default connect(mapStateToProps)(AuthorSignature);
