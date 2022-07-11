import React from "react";

export default function Message(props) {
  const message = props.message;
  return (
    <>
      <p className="message">{message}</p>
    </>
  );
}
