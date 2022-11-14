import React from "react";

function Message(props) {
  let { message } = props;
  return <span className="message">{message}</span>;
}

export default Message;
