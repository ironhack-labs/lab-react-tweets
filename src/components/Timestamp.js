import React from "react";

function Timestamp(props) {
  let { time } = props;
  return <span className="Timestamp">{time.timestamp}</span>;
}

export default Timestamp;
