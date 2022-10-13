import React from "react";

const User = (props) => {
  const { name, handle } = props.user;
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
};

export default User;
