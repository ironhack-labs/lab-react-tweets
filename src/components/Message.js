import React from "react";

function Message(props) {
  console.log(props);
  return (
    <div>
      <p className="message"> {props.message} </p>
    </div>
  );
}

export default Message;
