import React from 'react'

function Timestamp(props) {
   // console.log(props)
  return (
    <span className="timestamp">{props.timestamp}</span>
  );
}

export default Timestamp;