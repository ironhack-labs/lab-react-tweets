const Timestamp = (props) => {
  console.log("Timestamp", props)
  return (
    <div>
      <span className="timestamp"> {props.timestamp} </span>
    </div>
  );
};

export default Timestamp;
