function Message({ Tweet }) {
  return (
    <div>
      <p className="message">{Tweet.message}</p>
    </div>
  );
}

export default Message;
