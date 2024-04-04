import React from 'react'

function TimeStamp(props) {
    const {timeStamp} = props
  return (
    <span className="timestamp"> {timeStamp} </span>

  )
}

export default TimeStamp