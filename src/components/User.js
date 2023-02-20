import React from "react";

const User = (props) => {
  console.log("PROPS FROM USER");
  console.log(props);
  return (
    <div>
      <span className="user">
        <span className="name">{props.name}</span>
        <span className="handle"> {props.handle} </span>
      </span>
    </div>
  );
};

export default User;
