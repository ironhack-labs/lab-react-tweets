function Timestamp({timestamp}) {
  return (
    <div>
     <span className="timestamp">{timestamp}</span>
    </div>
  )
}

Timestamp.defaultProps = {
  timestamp:''
}

export default Timestamp;
