import React from "react";

//facon 1 function parametre props
function Timestamp(props) {
  // props vaut { time: "2h ago" }, pas besoin de this. car ce n'est pas un class
  return <span className="timestamp"> {props.time} </span>;
}

export default Timestamp;
