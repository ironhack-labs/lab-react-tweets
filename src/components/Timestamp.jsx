const Timestamp = (props) => {
    const { tweetAnanas } = props;
  return (
    <span className="timestamp">{tweetAnanas.timestamp}</span>
  )
}

export default Timestamp