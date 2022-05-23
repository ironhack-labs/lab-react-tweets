import React from "react";

function User(props) {
  return (
    <div>
      <span className="user">
        <span className="name">{props.userInfo.name}</span>
        <span className="handle">{props.userInfo.handle}</span>
      </span>
    </div>
  );
}

export default User;
