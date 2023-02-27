import React from "react";

function Timestamp(props) {
  let { timestamp } = props;
  return <span className="timestamp">{timestamp}</span>;
}

export default Timestamp;
