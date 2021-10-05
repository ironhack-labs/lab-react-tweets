import React from "react";

function User(props) {
  // console.log(props);
  return (
    <>
      <span className="user">
        <span className="name">{props.objUser.name}</span>
        <span className="handle">@{props.objUser.handle}</span>
      </span>
    </>
  );
}

export default User;
