function Timestamp(props) {
  const { tweet_timestamp } = props;
  return <span className="timestamp"> {tweet_timestamp} </span>;
}
export default Timestamp;
