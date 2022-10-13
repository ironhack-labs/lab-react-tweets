import React from "react";

const Message = (props) => {
  const { message } = props;
  return <p className="message">{message}</p>;
};

export default Message;
