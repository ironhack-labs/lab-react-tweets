import React from "react";

function Timestamp(props) {
  let { timestamp } = props;
  return (
    <div>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
}

export default Timestamp;