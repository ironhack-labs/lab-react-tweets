import React from 'react'

export default function Message(props) {
  return (
    <span className="message">
        <div>{props.message}</div>
    </span>
  )
}
