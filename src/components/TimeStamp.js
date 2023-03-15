function Timestamp ({ timestamp }) {
  return (
    <span className="timestamp"> {timestamp} </span>
  )
}

Timestamp.defaultProps = {
  timestamp: ""
}

export default Timestamp