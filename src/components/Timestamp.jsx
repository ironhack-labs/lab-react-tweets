const Timestamp = (props) => {
  console.log("Timestamp", props)
  return (
    <div>
      <span className="timestamp"> {props.timestamp} </span>
    </div>
  );
};

export default Timestamp;


//deconstructing (then you don't need props.timestamp)
// const Timestamp = ({timestapm}) => {
//   console.log("Timestamp", props)
//   return (
//     <div>
//       <span className="timestamp"> {timestamp} </span>
//     </div>
//   );
// };

// export default Timestamp;
