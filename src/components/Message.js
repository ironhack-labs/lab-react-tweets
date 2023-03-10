function Message ({ message }) {
  return (
    <p className="message">
    {message}
  </p>
  )
}

Message.defaultProps = {
  message: ''
}

export default Message