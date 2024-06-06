import React from "react";
import Tweet from "./Tweet";
function Message({ tweet }) {
  return (
    <>
      <p className="message"> {tweet.message} </p>
    </>
  );
}

export default Message;
