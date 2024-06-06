import React from "react";
import Tweet from "./Tweet";

function Timestamp({ tweet }) {
  return (
    <>
      <span className="timestamp"> {tweet.timestamp} </span>
    </>
  );
}

export default Timestamp;
