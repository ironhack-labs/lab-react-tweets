import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <span className="user">
        <span className="name">{user}</span>
      </span>
    </div>
  );
};

export default User;
