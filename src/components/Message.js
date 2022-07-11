import React from 'react'

export default function Message(props) {
  console.log(props)
  return (
    <p className="message">{props.tweetMessage}</p>
  )
}
