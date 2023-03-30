import React from "react"

const Timestamp = (props) => {
  const { time } = props
  return <span className="timestamp"> {time} </span>
}

export default Timestamp
