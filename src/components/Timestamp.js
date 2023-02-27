import React from 'react';

function Timestamp(props) {
    console.log(props)
   
  return (
    <span className="timestamp"> {props.time} </span>
  )
}

export default Timestamp;