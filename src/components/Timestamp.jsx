const Timestamp = ({ time }) => {
  return <span className="timestamp">{time}</span>;
};

export default Timestamp;

// without destructuring
// const Timestamp = (props) => {
//   return <span className="timestamp">{props.time}</span>;
// };

// export default Timestamp;
