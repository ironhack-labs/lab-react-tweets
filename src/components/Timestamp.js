import React from "react";

function Timestamp(props) {
  let { time } = props;
  return <span className="timestamp">{time}</span>;
}

export default Timestamp;
