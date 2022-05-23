function Timestamp(props) {
  const { time } = props;
  /* console.log(props); */
  return <span className="timestamp"> {time} </span>;
}

export default Timestamp;
