import React from 'react'

const Message = (props) => {
  return (
    <div>
        <p className="message">{props.message}</p>
    </div>
  )
}

export default Message