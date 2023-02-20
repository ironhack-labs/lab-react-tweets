import React from "react";

const Message = (props) => {
  console.log("PROPS FROM MESSAGE");
  console.log(props);
  return (
    <div>
      <p className="message">{props.message}</p>
    </div>
  );
};

export default Message;
