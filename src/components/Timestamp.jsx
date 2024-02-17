export default function Timestamp(props) {
  console.log({props});
  
  return (
    <span className="timestamp">{props.time}</span>
  )
}
