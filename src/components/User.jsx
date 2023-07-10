import React from "react";

function User({ oneUser }) {
  return (
    <div>
      <span className="user">
        <span className="name"> {oneUser.name} </span>
        <span className="handle">{oneUser.handle}</span>
      </span>
    </div>
  );
}

export default User;
