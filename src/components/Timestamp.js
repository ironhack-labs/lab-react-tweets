function Timestamp ({time}) {
  return (
    <span className="timestamp">{time}</span>
  )
}

Timestamp.defaultProps = {
  time: ''
}

export default Timestamp