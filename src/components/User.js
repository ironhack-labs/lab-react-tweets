import React from "react";

function User(props) {
  const { userData } = props;
  return (
    <div>
      <span className="name">{userData.name}</span>
      <span className="handle">{userData.handle}</span>
    </div>
  );
}

export default User;
