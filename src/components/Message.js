import React from 'react'

function Message(props) {
  const {msg} = props
  return (
    <div>
          <p className="message"> {msg}
        
        </p>
    </div>
  )
}

export default Message