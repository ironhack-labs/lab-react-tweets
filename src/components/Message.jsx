import React from "react"
function Message(prop) {
  return (
    <p className="message">
      {prop.message}
    </p>
  );
}

export default Message;