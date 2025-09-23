import React from "react";

const Timestamp = (props) => {
  return (
    <div>
      <span className="timestamp">{props.tweet.timestamp}</span>
    </div>
  );
};

export default Timestamp;
