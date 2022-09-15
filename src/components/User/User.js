import React from "react";

const User = ({ tweet }) => {
  return (
    <div>
      <span className="name">{tweet.user.name}</span>
      <span className="handle">{tweet.user.handle}</span>
    </div>
  );
};

export default User;
