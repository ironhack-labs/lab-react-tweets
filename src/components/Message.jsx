function Message(tweet) {
  const { message } = tweet;
  console.log(message);
  return <p className="message">{message}</p>;
}

export default Message;
