import React from "react";

export default function Timestamp(props) {
  return <span className="timestamp">{props.tweet.timestamp}</span>;
}