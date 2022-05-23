import React from "react";

function User(props) {
  console.log(props);
  const { name, handle } = props.userData;
  return (
    <div>
      <span className="name">{name}</span>
      <span className="handle">{handle}</span>
    </div>
  );
}

export default User;
