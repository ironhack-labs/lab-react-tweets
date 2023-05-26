function Timestamp({ time }) {
    console.log("timestamp comp", time);
    return (
      <span className="top">
        <span className="timestamp"> { time } </span>
      </span>
    );
  }
  export default Timestamp;