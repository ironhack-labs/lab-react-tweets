import React from "react";

const User = (props) => {
  console.log('User-user' + props.userData.name)
  return (
    <span className="user">
      <span className="name">{props.userData.name}</span>
      <span className="handle">@{props.userData.handle}</span>
    </span>
  );
};

export default User;
