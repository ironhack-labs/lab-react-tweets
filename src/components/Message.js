import React from "react";

function Message(props) {
  let { message } = props;
  return <p className="message">{message}</p>;
}

export default Message;
