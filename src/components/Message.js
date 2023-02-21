import React from 'react'

const Message = (tweet) => {
  return (
    <div> <p className="message">
    {tweet.messageData}
  </p></div>
  )
}

export default Message