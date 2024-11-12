import React from "react";

const User = ({ source }) => {
  return (
    <span className="user">
      <span className="name">{source.name}</span>
      <span className="handle">{source.handle}</span>
    </span>
  );
};

export default User;
