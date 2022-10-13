import React from "react";

const Timestamp = (props) => {
  const { timestamp } = props;
  return <span className="timestamp">{timestamp}</span>;
};

export default Timestamp;
