import React from "react";

function User({ Tweet }) {
  return (
    <div>
      <span className="user">
        <span className="name">{Tweet.user.name}</span>
        <span className="handle">{Tweet.user.handle}</span>
      </span>
    </div>
  );
}

export default User;
