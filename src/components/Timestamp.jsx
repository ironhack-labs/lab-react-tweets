import React from "react";

function Timestamp({ Tweet }) {
  return (
    <div>
      <span className="timestamp">{Tweet.timestamp} </span>
    </div>
  );
}

export default Timestamp;
