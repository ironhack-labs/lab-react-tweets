import React from "react";

function Message({ oneMessage }) {
  return (
    <div>
      <p className="message">{oneMessage}</p>
    </div>
  );
}

export default Message;
