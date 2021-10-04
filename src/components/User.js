import React from "react";

function User(props) {
  const user = props.user;
  const handle = props.handle;
  //console.log(handle)
  return (
    <>
      <span className="user">
        <span className="name">{user}</span>
        <span className="handle">{handle}</span>
      </span>
    </>
  );
}

export default User;
