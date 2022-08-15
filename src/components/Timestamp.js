function Timestamp(props) {
  /* const time = props.time; */
  const { time } = props
  return (
    <span className="timestamp">{time}</span>
  )
}
export default Timestamp;