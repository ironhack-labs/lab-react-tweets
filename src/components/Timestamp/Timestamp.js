import React from "react";

const Timestamp = ({ tweet }) => {
  return (
    <div>
      <span className="timestamp">{tweet.timestamp}</span>
    </div>
  );
};

export default Timestamp;
