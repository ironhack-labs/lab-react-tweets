import React from "react";

function Timestamp(props) {
	const stamps = props.stamps;
  return <span className="timestamp">{stamps}</span>;
}

export default Timestamp;