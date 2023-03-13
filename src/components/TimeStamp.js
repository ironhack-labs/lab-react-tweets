function Timestamp ({ time }) {
  return (
    <span className="timestamp"> TWEET_TIMESTAMP </span>
  )
}

TimeStamp.defaultProps = {
  time: ""
}

export default Timestamp