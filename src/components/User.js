import React from "react";

export default function Profile(props) {
  const user = props.userData;

  return (
    <>
      <span className="user">
        <span className="name">{user.name}</span>
        <span className="handle">{user.handle}</span>
      </span>
    </>
  );
}
