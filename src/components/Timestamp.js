import React from "react";

const Timestamp = (props) => {
  console.log("PROPS FROM TIMESTAMP");
  console.log(props);
  return (
    <div>
      <span className="timestamp"> {props.time} </span>
    </div>
  );
};

export default Timestamp;
