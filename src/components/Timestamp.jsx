import React from 'react'

function Timestamp({ time }) {
    console.log(time)
  return (
    <span className="timestamp">{ time }</span>
  )
}

export default Timestamp