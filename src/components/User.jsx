import React from "react";

function User({ userData: { name, handle } }) {
  return (
    <span className="user">
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </span>
  );
}

export default User;
