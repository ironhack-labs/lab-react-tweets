function Message ({ message }) {
  return (
    <p className="message"> TWEET_MESSAGE </p>
  )
}

Message.defaultProps = {
  message: ""
}

export default Message;