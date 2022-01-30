import React from "react";

function User({ tweetUser }) {
  return (
    <div>
      <span className="user">
        <span className="name">{tweetUser.name}</span>
        <span className="handle">@{tweetUser.handle}</span>
      </span>
    </div>
  );
}

export default User;
