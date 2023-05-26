function Timestamp({ time }) {
    console.log("user name and handle comp", time);
    return (
      <span className="top">
        <span className="timestamp"> { time } </span>
      </span>
    );
  }
  export default Timestamp;