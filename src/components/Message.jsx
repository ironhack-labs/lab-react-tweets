function Message(props) {
  const { tweet_message } = props;
  return <p className="message"> {tweet_message} </p>;
}
export default Message;
