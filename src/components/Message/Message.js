import React from "react";

const Message = ({ tweet }) => {
  return (
    <div>
      <p className="message">{tweet.message}</p>
    </div>
  );
};

export default Message;
