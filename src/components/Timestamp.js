import React from 'react'

function Timestamp(props) {
    console.log(props)
  return (
    <div>
    <span className="timestamp">{props.time}</span>
    </div>
  )
}

export default Timestamp