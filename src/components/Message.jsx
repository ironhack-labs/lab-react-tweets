  import React from 'react'
  
  const Message = (props) => {
    return (
      <div>
        <p className="message">
        {props.sms}
        </p>
      </div>
    )
  }
  
  export default Message