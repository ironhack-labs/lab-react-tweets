import React from "react";

export default function Timestamp(props) {
  const time = props.time;
  return (
    <>
      <span className="timestamp">{time}</span>
    </>
  );
}
