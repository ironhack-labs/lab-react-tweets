import React from "react";

function User(props) {
  const { userInfo } = props;

  return (
    <span className="user">
      <span className="name">{userInfo.name}</span>
      <span className="handle">@{userInfo.handle}</span>
    </span>
  );
}

export default User;
